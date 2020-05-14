const { Validator } = require('node-input-validator')
const resData = require('../../helper/response')

const validCreate = (req, res, next) => {
  // Validator
  const valid = new Validator(req.body, {
    name: 'required|string',
    bio: 'required|string',
    birthdate: 'required|string',
    gender: 'required|string',
    sosmedId: 'required|numeric',
    userId: 'required|numeric'
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
    name: 'string',
    bio: 'string',
    birthdate: 'string',
    gender: 'string',
    sosmedId: 'numeric',
    userId: 'numeric'
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
