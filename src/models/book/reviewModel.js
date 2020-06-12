const db = require('../../utils/database')
const table = 'book_reviews'

module.exports = {
  getReview: (data, start, end) => {
    let query = `SELECT ${table}.*, user_details.fullname, books.name FROM ${table} `
    query += `JOIN books ON books.id = ${table}.book_id ` // Join Table Query
    query += `JOIN user_details ON user_details.user_id = ${table}.user_id ` // Join Table Query

    // If query search active
    if (parseInt(data.query.book_id)) {
      query += `WHERE ${table}.book_id = ${parseInt(data.query.book_id)} ` // Get Where
    } else if (parseInt(data.query.userId)) {
      query += `WHERE ${table}.user_id = ${parseInt(data.query.userId)} ` // Get Where
    }

    // If data id active
    if (parseInt(data.id)) {
      query += `WHERE ${table}.id = ${parseInt(data.id)} ` // Get Where
      query += 'ORDER BY book_reviews.id DESC '
    } else {
      query += 'ORDER BY book_reviews.id DESC '
      query += `LIMIT ${start}, ${end} ` // Limit Table Query
    }

    return new Promise((resolve, reject) => {
      db.query(query, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  findReviewId: (data) => {
    const query = `SELECT id FROM ${table} WHERE ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res.length))
    })
  },
  countReview: (data) => {
    let query = `SELECT ${table}.id FROM ${table} `
    query += `JOIN books ON books.id = ${table}.book_id ` // Join Table Query
    query += `JOIN user_details ON user_details.user_id = ${table}.user_id ` // Join Table Query

    if (parseInt(data.book_id)) {
      query += `WHERE book_id = ${data.book_id}` // Get Where
    } else if (parseInt(data.user_id)) {
      query += `WHERE user_id = ${data.user_id}` // Get Where
    }

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res.length))
    })
  },
  createReview: (data) => {
    const query = `INSERT INTO ${table} SET ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  updateReview: (data) => {
    const query = `UPDATE ${table} SET ? WHERE ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  deleteReview: (data) => {
    const query = `DELETE FROM ${table} WHERE ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  }
}
