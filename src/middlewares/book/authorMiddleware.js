const { Validator } = require('node-input-validator')
const resData = require('../../helper/response')

const validTest = (req, res, next) => {
  // Validator
  const valid = new Validator(req.body, {
    name: 'required|string'
  })

  let error = ''

  valid.check().then((matched) => {
    for (const prop in valid.errors) {
      error = valid.errors[prop].message
    }
    if (!matched) {
      res.status(422).send(resData(
        false, error
      ))
    } else {
      next()
    }
  })
}

module.exports = validTest
