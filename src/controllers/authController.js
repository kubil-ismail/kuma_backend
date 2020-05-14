require('dotenv').config()
const { APP_KEY, APP_PIN } = process.env
const authModel = require('../models/authModel')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')
const emailVerify = require('../utils/emailVerify')
const uniqid = require('uniqid')
const resData = require('../helper/response')

module.exports = {
  loginAuth: (req, res) => {
    const { email, password } = req.body
    const checkLogin = authModel.findAccount({ email: email })

    // Check email
    checkLogin.then(_result => {
      // Check account status
      if (!_result.activate) {
        res.status(400).send(resData(
          false, 'Please activate your account !'
        ))
      } else {
        // Check Password
        const checkPassword = bcrypt.compareSync(password, _result.password)
        if (checkPassword) {
          // Create Api Key
          jwt.sign({ _result }, APP_KEY, (err, token) => {
            if (!err) {
              res.status(200).send(resData(
                true, 'Login successful', { apiKey: token, role: _result.role_id }
              ))
            } else {
              res.status(400).send(resData(
                false, 'Unable to sign in at this time, try for a few moments'
              ))
            }
          })
        } else {
          res.status(400).send(resData(
            false, 'Password do not match'
          ))
        }
      }
    }).catch(_ => res.status(400).send(
      res.status(400).send(resData(
        false, 'Email not registered'
      ))
    ))
  },
  registerAuth: (req, res) => {
    const { email, password, pin } = req.body
    const checkPin = pin ? bcrypt.compareSync(pin, APP_PIN) : null
    const checkEmail = authModel.findEmail({ email: email })

    // Check Email if exist
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
            res.status(200).send(resData(
              true, 'Registration successful', { userId: _result.insertId }
            ))
          }).catch(_ => {
            res.status(400).send(resData(
              false, 'Registration successful'
            ))
          })
        }).catch(_ => {
          res.status(400).send(resData(
            false, 'Email failed to send'
          ))
        })
      } else {
        res.status(400).send(resData(
          false, 'Email already registered'
        ))
      }
    }).catch(_ => res.status(400).send(resData(
      false, 'Cant Sign In Right Now'
    )))
  },
  activateAuth: (req, res) => {
    const { email, code } = req.body
    const checkCode = authModel.findCode({ email: email, code: code })

    // Check Code if exist
    checkCode.then(_result => {
      if (_result.length < 1) {
        res.status(400).send(resData(
          false, 'Invalid Code'
        ))
      } else {
        // Activate Code
        const activate = authModel.activateUser({ email: email })
        activate.then(_ => {
          res.status(200).send(resData(
            true, 'Activation successful'
          ))
        }).catch(_ => res.status(400).send(resData(
          false, 'Activation failed'
        )))
      }
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Activation failed'
      ))
    })
  }
}
