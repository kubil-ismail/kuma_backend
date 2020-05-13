require('dotenv').config()
const { APP_KEY, APP_PIN } = process.env
const authModel = require('../models/authModel')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')

module.exports = {
  loginAuth: (req, res) => {
    const { email, password } = req.body
    const checkLogin = authModel.findAccount({ email: email })

    checkLogin.then(_result => {
      const checkPassword = bcrypt.compareSync(password, _result.password)
      if (checkPassword) {
        // Create Api Key
        jwt.sign({ _result }, APP_KEY, (err, token) => {
          if (!err) {
            res.status(200).send({
              status: true,
              message: 'Login successful',
              data: {
                apiKey: token, role: _result.role_id
              }
            })
          } else {
            res.status(400).send({
              status: false,
              message: 'Unable to sign in at this time, try for a few moments'
            })
          }
        })
      } else {
        res.status(400).send({
          status: false,
          message: 'Password do not match'
        })
      }
    }).catch(_ => res.status(400).send({
      status: false,
      message: 'Email not registered'
    }))
  },
  registerAuth: (req, res) => {
    const { email, password, pin } = req.body
    const checkPin = pin ? bcrypt.compareSync(pin, APP_PIN) : null
    const checkEmail = authModel.findEmail({ email: email })

    checkEmail.then(_result => {
      if (!_result) {
        const data = {
          email: email,
          password: bcrypt.hashSync(password, salt),
          role_id: checkPin ? 2 : 1
        }
        const createUser = authModel.createUser(data)
        createUser.then(_result => {
          res.status(200).send({
            status: true,
            message: 'Registration successful',
            userId: _result.insertId
          })
        })
      } else {
        res.status(400).send({
          status: false,
          message: 'Email already registered'
        })
      }
    }).catch(_ => res.status(400).send({
      status: false,
      message: 'Cant Sign In Right Now'
    }))
  }
}
