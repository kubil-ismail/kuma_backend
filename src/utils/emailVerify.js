require('dotenv').config()
const { APP_EMAIL, APP_EMAIL_PASS, APP_EMAIL_SERVICE } = process.env
const nodemailer = require('nodemailer')
const fs = require('fs')
const mustache = require('mustache')
const authModel = require('../models/authModel')

const emailVerify = async (payload) => {
  const configMail = {
    service: APP_EMAIL_SERVICE,
    auth: {
      user: APP_EMAIL,
      pass: APP_EMAIL_PASS
    }
  }

  const template = fs.readFileSync('./src/helper/emailTemplate.html', { encoding: 'utf-8' })
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
      html: mustache.render(template, { ...payload })
    }
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => err ? reject(Error(err)) : resolve(info))
    })
  }).catch(err => console.log(err))
}

module.exports = emailVerify
