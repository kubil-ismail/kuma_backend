const bookModel = require('../../models/book/bookModel')
const pagination = require('../../utils/pagination')
const upload = require('../../utils/multer')

module.exports = {
  getBook: async (req, res) => {
    const { id } = req.params
    const { q } = req.query
    const totalData = await bookModel.countBook({ name: q })
    const paginate = id ? { start: null, end: null } : pagination.set(req.query, totalData)
    const getBook = bookModel.getBook({ id: parseInt(id), name: q }, paginate.start, paginate.end)

    getBook.then((result) => {
      res.status(200).send({ status: true, data: result, info: paginate })
    }).catch(_ => {
      // res.status(400).send({ status: false, message: 'Data gagal diakses' })
    })
  },
  createBook: (req, res) => {
    upload(req, res, () => {
      if (req.fileValidationError) {
        return res.status(400).send({ status: true, message: req.fileValidationError })
      } else if (!req.file) {
        return res.status(400).send({ status: true, message: 'Please select an image to upload' })
      }

      const { filename } = req.file
      const { name, description, genreId, authorId, statusId, published, language } = req.body
      const data = {
        name: name,
        description: description,
        cover: `book/cover/${filename}`,
        genre_id: genreId,
        author_id: authorId,
        status_id: statusId,
        published: published,
        language: language
      }
      const createBook = bookModel.createBook(data)

      createBook.then(_ => {
        res.status(201).send({ status: true, message: 'Data berhasil ditambah', data: data })
      }).catch(_ => {
        console.log(_)
        res.status(400).send({ status: false, message: 'Data gagal ditambah' })
      })
    })
  },
  updateBook: async (req, res) => {
    const { id } = req.params
    const getBook = await bookModel.findBookId({ id: parseInt(id) })
    const { name, description, genreId, authorId, statusId, published, language } = req.body
    const data = [
      {
        name: name,
        description: description,
        genre_id: genreId,
        author_id: authorId,
        status_id: statusId,
        published: published,
        language: language,
        update_at: new Date()
      },
      { id: parseInt(id) }
    ]

    if (getBook) {
      const updateBook = bookModel.updateBook(data)
      updateBook.then(_ => {
        res.status(200).send({ status: true, message: 'Data berhasil diubah', data: data[0] })
      }).catch(_ => {
        res.status(400).send({ status: false, message: 'Data gagal diubah' })
      })
    } else {
      res.status(400).send({ status: false, message: 'Buku tidak tersedia' })
    }
  },
  updateCoverBook: (req, res) => {
    upload(req, res, () => {
      if (req.fileValidationError) {
        return res.status(400).send({ status: true, message: req.fileValidationError })
      } else if (!req.file) {
        return res.status(400).send({ status: true, message: 'Please select an image to upload' })
      }

      const { id } = req.params
      const { filename } = req.file
      const data = [
        { cover: `book/cover/${filename}`, update_at: new Date() },
        { id: parseInt(id) }
      ]

      const updateBook = bookModel.updateBook(data)
      updateBook.then(_ => {
        res.status(200).send({ status: true, message: 'Cover berhasil diubah', data: data[0] })
      }).catch(_ => {
        res.status(400).send({ status: false, message: 'Cover gagal diubah' })
      })
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
