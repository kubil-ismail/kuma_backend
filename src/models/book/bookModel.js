const db = require('../../utils/database')
const table = 'books'

module.exports = {
  getBook: (data = false, start, end) => {
    let query = `SELECT ${table}.*, book_genres.name AS genre, book_authors.name AS author, book_status.name AS status, ${table}.id FROM ${table} ` // Get all book
    query += `JOIN book_genres ON book_genres.id = ${table}.genre_id ` // Join Table Query
    query += `JOIN book_authors ON book_authors.id = ${table}.author_id ` // Join Table Query
    query += `JOIN book_status ON book_status.id = ${table}.status_id ` // Join Table Query

    if (data.sort) {
      query += `ORDER BY ${table}.name DESC `
    } else {
      query += `ORDER BY ${table}.name ASC `
    }

    // If id not null add where condition
    if (data.name) {
      query += `WHERE ${table}.name LIKE '%${data.name}%'`
      query += `LIMIT ${start}, ${end}` // Limit Table Query
    } else if (data.id) {
      query += `WHERE ${table}.id = ${parseInt(data.id)}`
    } else {
      query += `LIMIT ${start}, ${end}` // Limit Table Query
    }

    console.log(query)

    return new Promise((resolve, reject) => {
      db.query(query, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  findBookId: (data) => {
    const query = `SELECT id FROM ${table} WHERE ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res.length))
    })
  },
  countBook: (data) => {
    let query = `SELECT books.id FROM ${table} `
    query += `JOIN book_genres ON book_genres.id = ${table}.genre_id ` // Join Table Query
    query += `JOIN book_authors ON book_authors.id = ${table}.author_id ` // Join Table Query
    query += `JOIN book_status ON book_status.id = ${table}.status_id ` // Join Table Query
    query += `${data.name ? `WHERE ${table}.name LIKE '%${data.name}%' ` : ''}` // On Search active

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
