const genreModel = require('../../models/book/genreModel')

module.exports = {
  getGenre: (req, res) => {
    res.status(400).send({ status: false, message: 'Data gagal diakses' })
  },
  createGenre: (req, res) => {
    res.status(400).send({ status: false, message: 'Data gagal diakses' })
  },
  updateGenre: (req, res) => {
    res.status(400).send({ status: false, message: 'Data gagal diakses' })
  },
  deleteGenre: (req, res) => {
    res.status(400).send({ status: false, message: 'Data gagal diakses' })
  }
}
