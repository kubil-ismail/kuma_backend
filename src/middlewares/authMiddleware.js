const { Validator } = require('node-input-validator')

const validTest = (req, res, next) => {
  // Validator
  const valid = new Validator(req.body, {
    email: 'required|email',
    pin: 'numeric'
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

module.exports = validTest
