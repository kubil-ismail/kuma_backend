const bookModel = require('../models/bookModel')
const pagination = require('../utils/pagination')

module.exports = {
  getBook: async (req, res) => {
    const { id } = req.params

    const totalData = await bookModel.countBook()
    const paginate = id ? { start: null, end: null } : pagination.set(req.query, totalData)
    const getBook = bookModel.getBook({ id: parseInt(id) }, paginate.start, paginate.end)

    getBook.then((result) => {
      res.status(200).send({ status: true, data: result, info: paginate })
    }).catch(_ => {
      res.status(400).send({ status: false, message: 'Data gagal diakses' })
    })
  },
  deleteBook: (req, res) => {
    const { id } = req.params
    const deleteBook = bookModel.deleteBook({ id: id })

    deleteBook.then(_ => {
      res.status(200).send({ status: true, message: 'Data berhasil dihapus' })
    }).catch(_ => {
      res.status(400).send({ status: false, message: 'Data gagal dihapus' })
    })
  }
}
