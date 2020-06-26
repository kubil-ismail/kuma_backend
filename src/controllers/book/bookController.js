const bookModel = require('../../models/book/bookModel')
const pagination = require('../../utils/pagination')
const upload = require('../../utils/multer')
const { Validator } = require('node-input-validator')
const response = require('../../helper/response')

module.exports = {
  getBook: async (req, res) => {
    const { id } = req.params
    const { search, sort } = req.query
    const totalData = id ? 0 : await bookModel.countBook({ name: search })
    const paginate = id ? { start: null, end: null } : pagination.set(req.query, totalData)
    const getBook = bookModel.getBook({ id: parseInt(id), name: search, sort: sort }, paginate.start, req.query.limit)

    getBook.then((result) => {
      if (result.length < 1) {
        res.status(400).send(response(
          false, 'Book not found'
        ))
      } else {
        res.status(200).send(response(
          true, 'Get book success', result, paginate
        ))
      }
    }).catch(_ => {
      console.log(_)
      res.status(400).send(response(
        false, 'Get book failed'
      ))
    })
  },
  getGenresBook: async (req, res) => {
    const { id, idGenre } = req.params
    const { search, sort } = req.query
    const totalData = id ? 0 : await bookModel.countBookGenre({ idGenre: idGenre })
    const paginate = id ? { start: null, end: null } : pagination.set(req.query, totalData)
    const getBook = bookModel.getGenreBook({ id: parseInt(id), name: search, sort: sort, idGenre: idGenre }, paginate.start, req.query.limit)
    getBook.then((result) => {
      if (result.length < 1) {
        res.status(200).send(response(
          false, 'Book not found'
        ))
      } else {
        res.status(200).send(response(
          true, 'Get book success', result, paginate
        ))
      }
    }).catch(_ => {
      console.log(_)
      res.status(400).send(response(
        false, 'Get book failed'
      ))
    })
  },
  createBook: (req, res) => {
    upload(req, res, () => {
      if (req.fileValidationError) {
        return res.status(400).send(response(
          false, req.fileValidationError
        ))
      } else if (!req.file) {
        return res.status(400).send(response(
          false, 'Please select an image to upload'
        ))
      }
      // Validator
      const valid = new Validator(req.body, {
        name: 'required|string',
        description: 'required|string',
        genreId: 'required|numeric',
        authorId: 'required|numeric',
        statusId: 'required|numeric',
        published: 'required',
        language: 'required|string'
      })

      let error = ''

      valid.check().then((matched) => {
        for (const prop in valid.errors) {
          error = valid.errors[prop].message
        }
        if (!matched) {
          res.status(422).send(response(
            false, error
          ))
        }
      })

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
        res.status(201).send(response(
          true, 'Create book success', data
        ))
      }).catch(_ => {
        res.status(400).send(response(
          false, 'Create book failed'
        ))
      })
    })
  },
  updateBook: async (req, res) => {
    const { id } = req.params
    const getBook = await bookModel.findBookId({ id: parseInt(id) })
    const updateData = req.body
    const data = [updateData, { id: parseInt(id) }]

    if (getBook) {
      const updateBook = bookModel.updateBook(data)
      updateBook.then(_ => {
        res.status(200).send(response(
          true, 'Update book success', data
        ))
      }).catch(_ => {
        res.status(400).send(response(
          false, 'Update book failed'
        ))
      })
    } else {
      res.status(400).send(response(
        false, 'Book not found'
      ))
    }
  },
  updateCoverBook: (req, res) => {
    upload(req, res, async () => {
      if (req.fileValidationError) {
        return res.status(400).send(response(
          false, req.fileValidationError
        ))
      } else if (!req.file) {
        return res.status(400).send(response(
          false, 'Please select an image to upload'
        ))
      }

      const { id } = req.params
      const { filename } = req.file
      const getBook = await bookModel.findBookId({ id: parseInt(id) })

      if (getBook) {
        const data = [
          {
            cover: `book/cover/${filename}`,
            update_at: new Date()
          },
          { id: parseInt(id) }
        ]

        const updateBook = bookModel.updateBook(data)
        updateBook.then(_ => {
          res.status(200).send(response(
            true, 'Update cover book success', data
          ))
        }).catch(_ => {
          res.status(400).send(response(
            false, 'Update cover book failed'
          ))
        })
      } else {
        res.status(400).send(response(
          false, 'Book not found'
        ))
      }
    })
  },
  deleteBook: (req, res) => {
    const { id } = req.params
    const deleteBook = bookModel.deleteBook({ id: id })

    deleteBook.then(_ => {
      res.status(200).send(response(
        true, 'Delete book success', { idBook: id }
      ))
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Delete book failed'
      ))
    })
  }
}
