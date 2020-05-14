const { Validator } = require('node-input-validator')

const updateValidator = (req, res, next) => {

  // Validator
  const valid = new Validator(req.body, {
    name: 'string',
    description: 'string',
    genreId: 'numeric',
    authorId: 'numeric',
    statusId: 'numeric',
    published: 'dateiso',
    language: 'string'
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

module.exports = updateValidator
