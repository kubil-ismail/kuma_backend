const db = require('../../utils/database')
const table = 'books'

module.exports = {
  getBook: (data = false, start, end) => {
    let query = `SELECT books.*, book_genres.name AS genre, book_authors.name AS author, book_status.name AS status, books.id FROM ${table} ` // Get all book
    query += 'JOIN book_genres ON book_genres.id = books.genre_id ' // Join Table Query
    query += 'JOIN book_authors ON book_authors.id = books.author_id ' // Join Table Query
    query += 'JOIN book_status ON book_status.id = books.status_id ' // Join Table Query

    // If id not null add where condition
    if (data.name) {
      query += `WHERE name LIKE '%${data.name}%' LIMIT ${end} OFFSET ${start}`
    } else {
      query += `${parseInt(data.id) ? 'WHERE ?' : ''} LIMIT ${end} OFFSET ${start}`
    }

    return new Promise((resolve, reject) => {
      if (data.id) {
        db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
      } else {
        db.query(query, (err, res) => err ? reject(Error(err)) : resolve(res))
      }
    })
  },
  findBookId: (data) => {
    const query = `SELECT id FROM ${table} WHERE ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res.length))
    })
  },
  countBook: (data) => {
    const query = `SELECT id FROM ${table} ${data.name ? `WHERE name LIKE '%${data.name}%'` : 'WHERE ?'}`

    return new Promise((resolve, reject) => {
      if (data.name) {
        db.query(query, (err, res) => err ? reject(Error(err)) : resolve(res.length))
      } else {
        db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res.length))
      }
    })
  },
  createBook: (data) => {
    const query = `INSERT INTO ${table} SET ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  updateBook: (data) => {
    const query = `UPDATE ${table} SET ? WHERE ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  deleteBook: (data) => {
    const query = `DELETE FROM ${table} WHERE ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  }
}
