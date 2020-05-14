const db = require('../utils/database')
const table = 'users'

module.exports = {
  findEmail: (data) => {
    const query = `SELECT email FROM ${table} WHERE ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res.length))
    })
  },
  findAccount: (data) => {
    const query = `SELECT * FROM ${table} WHERE ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res[0]))
    })
  },
  findCode: (data) => {
    const query = `SELECT * FROM user_activates WHERE user_email = '${data.email}' AND code = '${data.code}' `

    return new Promise((resolve, reject) => {
      db.query(query, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  createUser: (data) => {
    const query = `INSERT INTO ${table} SET ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  createActivator: (data) => {
    const query = 'INSERT INTO user_activates SET ?'

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  activateUser: (data) => {
    const query = `UPDATE users SET activate = '1' WHERE email = '${data.email}'`

    return new Promise((resolve, reject) => {
      db.query(query, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  }
}
