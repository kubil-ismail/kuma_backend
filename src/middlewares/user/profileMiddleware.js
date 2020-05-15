const { Validator } = require('node-input-validator')
const resData = require('../../helper/response')

const validCreate = (req, res, next) => {
  // Validator
  const valid = new Validator(req.body, {
    fullname: 'required|string',
    bio: 'required|string',
    birthdate: 'required|string',
    gender: 'required|string',
    social_media_id: 'required|numeric',
    user_id: 'required|numeric'
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

const validUpate = (req, res, next) => {
  // Validator
  const valid = new Validator(req.body, {
    fullname: 'string',
    bio: 'string',
    birthdate: 'string',
    gender: 'string',
    social_media_id: 'numeric',
    user_id: 'numeric'
  })

  valid.check().then((matched) => {
    if (!matched) {
      res.status(422).send({
        status: false,
        error: valid.errors
      })
    } else {
      next()
    }
  })
}
module.exports = { validCreate, validUpate }
