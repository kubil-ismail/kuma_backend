const { Validator } = require('node-input-validator')
const resData = require('../../helper/response')

const validTest = (req, res, next) => {
  // Validator
  const valid = new Validator(req.body, {
    book_id: 'required|string',
    user_id: 'required|string',
    review: 'string|maxLength:300',
    rating: 'numeric'
  })

  valid.check().then((matched) => {
    if (!matched) {
      res.status(422).send(resData(
        false, valid.errors
      ))
    } else {
      next()
    }
  })
}

module.exports = validTest
