const { Validator } = require('node-input-validator')
const resData = require('../../helper/response')

const validSosmed = (req, res, next) => {
  // Validator
  const valid = new Validator(req.body, {
    facebook: 'string',
    instagram: 'string',
    twitter: 'string'
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

module.exports = validSosmed
