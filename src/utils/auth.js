require('dotenv').config()
const { APP_KEY } = process.env
const jwt = require('jsonwebtoken')
const resData = require('../helper/response')

const auth = (req, res, next) => {
  const header = req.headers.authorization

  if (typeof header !== 'undefined') {
    jwt.verify(header, APP_KEY, function (err) {
      if (err) {
        res.status(401).send(resData(
          false, 'Api Key Error'
        ))
      } else {
        next()
      }
    })
  } else {
    res.status(401).send(resData(
      false, 'Api key cannot be empty'
    ))
  }
}

module.exports = auth
