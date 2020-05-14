require('dotenv').config()
const { APP_KEY, APP_PIN } = process.env
const authModel = require('../models/authModel')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')
const emailVerify = require('../utils/emailVerify')
const uniqid = require('uniqid')

module.exports = {
  loginAuth: (req, res) => {
    const { email, password } = req.body
    const checkLogin = authModel.findAccount({ email: email })

    checkLogin.then(_result => {
      // Check account status
      if (!_result.activate) {
        res.status(400).send({
          status: false,
          message: 'Please activate your account !'
        })
      }
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
        // Send Email verify
        const sendEmail = emailVerify({ email: email, code: uniqid() })
        sendEmail.then(_result => {
          // Create New User
          const createUser = authModel.createUser(data)
          createUser.then(_result => {
            res.status(200).send({
              status: true,
              message: 'Registration successful',
              userId: _result.insertId
            })
          }).catch(_ => {
            res.status(400).send({
              status: false,
              message: 'Registration successful'
            })
          })
        }).catch(_ => {
          res.status(400).send({
            status: false,
            message: 'Email failed to send'
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
  },
  activateAuth: (req, res) => {
    const { email, code } = req.body
    const checkCode = authModel.findCode({ email: email, code: code })

    checkCode.then(_result => {
      if (_result.length < 1) {
        res.status(400).send({
          status: false,
          message: 'Invalid Code'
        })
      } else {
        const activate = authModel.activateUser({ email: email })
        activate.then(_ => {
          res.status(200).send({
            status: true,
            message: 'Activation successful'
          })
        }).catch(err => console.log(err))
      }
    }).catch(_ => {
      res.status(400).send({
        status: false,
        message: 'Activation failed'
      })
    })
  }
}
