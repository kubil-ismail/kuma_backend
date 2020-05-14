require('dotenv').config()
const { APP_EMAIL, APP_EMAIL_PASS, APP_EMAIL_SERVICE } = process.env
const nodemailer = require('nodemailer')
const authModel = require('../models/authModel')

const emailVerify = async (payload) => {
  const configMail = {
    service: APP_EMAIL_SERVICE,
    auth: {
      user: APP_EMAIL,
      pass: APP_EMAIL_PASS
    }
  }
  const transporter = await nodemailer.createTransport(configMail)
  const createKey = authModel.createActivator({
    user_email: payload.email,
    code: payload.code
  })
  createKey.then(_ => {
    var mailOptions = {
      from: 'kumabook@gmail.com',
      to: payload.email,
      subject: 'Activate your account',
      text: `Thank you for registering in Kuma book, Here your activate code ${payload.code}`
    }
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => err ? reject(Error(err)) : resolve(info))
    })
  }).catch(err => console.log(err))
}

module.exports = emailVerify
