const db = require('../../utils/database')
const table = 'user_details'

module.exports = {
  getProfile: (data) => {
    let query = `SELECT ${table}.*, users.email, users.role_id FROM ${table} `
    query += 'JOIN users ON user_details.user_id = users.id ' // Join Table Query
    query += parseInt(data.id) ? `WHERE ${table}.id = ${parseInt(data.id)}` : '' // Search Id Query

    return new Promise((resolve, reject) => {
      db.query(query, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  createProfile: (data) => {
    const query = `INSERT INTO ${table} SET ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  updateProfile: (data) => {
    const query = `UPDATE ${table} SET ? WHERE ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  deleteProfile: (data) => {
    const query = `DELETE FROM ${table} WHERE ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  }
}
