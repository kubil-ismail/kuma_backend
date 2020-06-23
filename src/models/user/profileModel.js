const db = require('../../utils/database')
const table = 'user_details'

module.exports = {
  getProfile: (data, start, end) => {
    let query = `SELECT ${table}.*, users.email, users.role_id, user_sosmed.*, ${table}.id FROM ${table} `
    query += 'JOIN users ON user_details.user_id = users.id ' // Join Table Query
    query += 'JOIN user_sosmed ON user_details.social_media_id = user_sosmed.id ' // Join Table Query

    // If id not null add where condition
    if (data.name) {
      query += `WHERE ${table}.fullname LIKE '%${data.name}%'`
      query += `LIMIT ${start}, ${end}` // Limit Table Query
    } else if (data.id) {
      query += `WHERE ${table}.id = ${parseInt(data.id)}`
    } else {
      query += `LIMIT ${start}, ${end}` // Limit Table Query
    }

    return new Promise((resolve, reject) => {
      db.query(query, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  getProfileNew: (data) => {
    const query = `SELECT * FROM ${table} WHERE id = ${data.id}`
    return new Promise((resolve, reject) => {
      db.query(query, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  getProfileFavorite: (data, start, end) => {
    let query = 'SELECT book_favorites.id AS book_favorites_id, books.* FROM book_favorites '
    query += `JOIN books ON book_favorites.book_id = books.id WHERE book_favorites.user_id = ${data.id} ` // Join Table Query
    query += `LIMIT ${start}, ${end}` // Limit Table Query
    return new Promise((resolve, reject) => {
      db.query(query, (err, res) => err ? reject(Error(err)) : resolve(res))
    })
  },
  countFavorite: (data) => {
    let query = 'SELECT book_favorites.id FROM book_favorites '
    query += `JOIN books ON book_favorites.book_id = books.id WHERE book_favorites.user_id = ${data.id} ` // Join Table Query
    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res.length))
    })
  },
  findProfileId: (data) => {
    const query = `SELECT id FROM ${table} WHERE ?`

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res.length))
    })
  },
  countProfile: (data) => {
    let query = `SELECT ${table}.id FROM ${table} `
    query += `JOIN users ON ${table}.user_id = users.id ` // Join Table Query
    query += `JOIN user_sosmed ON ${table}.social_media_id = user_sosmed.id ` // Join Table Query
    query += `${data.name ? `WHERE ${table}.fullname LIKE '%${data.name}%'` : ''}` // On Search active

    if (parseInt(data.book_id)) {
      query += `WHERE book_id = ${data.book_id} ` // Get Where
    } else if (parseInt(data.user_id)) {
      query += `WHERE user_id = ${data.user_id} ` // Get Where
    }

    return new Promise((resolve, reject) => {
      db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res.length))
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
