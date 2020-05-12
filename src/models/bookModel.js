const db = require('../utils/database')
const table = 'books'

module.exports = {
  getBook: (data = false, start, end) => {
    // If id not null add where condition
    const query = `SELECT * FROM ${table} ${parseInt(data.id) ? 'WHERE ?' : ''} ${start && end ? `LIMIT ${end} OFFSET ${start}` : ''}`

    // Set Promise
    return new Promise((resolve, reject) => {
      if (data.id) {
        db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
      } else {
        db.query(query, (err, res) => err ? reject(Error(err)) : resolve(res))
      }
    })
  },
  countBook: () => {
    const query = `SELECT COUNT(id) as total FROM ${table}`

    return new Promise((resolve, reject) => {
      db.query(query, (err, res) => err ? reject(Error(err)) : resolve(res[0].total))
    })
  },
  deleteBook: (data) => {
    const query = `DELETE FROM ${table} WHERE ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  }
}
