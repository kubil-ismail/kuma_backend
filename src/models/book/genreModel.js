const db = require('../../utils/database')
const table = 'book_authors'

module.exports = {
  getGenre: (data) => {
    const query = `SELECT id, name FROM ${table} ${parseInt(data.id) ? 'WHERE ?' : ''}`

    return new Promise((resolve, reject) => {
      if (data.id) {
        db.query(query, data, (err, res) => err ? reject(Error(err)) : resolve(res))
      } else {
        db.query(query, (err, res) => err ? reject(Error(err)) : resolve(res))
      }
    })
  },
  finGenreId: (data) => {

  },
  createGenre: (data) => {

  },
  updateGenre: (data) => {

  },
  deleteGenre: (data) => {

  }
}
