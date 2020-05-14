require('dotenv').config()
const { APP_KEY } = process.env
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  const header = req.headers.authorization

  if (typeof header !== 'undefined') {
    jwt.verify(header, APP_KEY, function (err) {
      if (err) {
        res.status(403).send({ status: false, message: 'Api Key Error' })
      } else {
        next()
      }
    })
  } else {
    res.status(403).send({ status: false, message: 'Api key cannot be empty' })
  }
}

module.exports = auth
