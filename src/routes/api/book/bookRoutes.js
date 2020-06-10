const router = require('express').Router()
const auth = require('../../../utils/auth')
const validator = require('../../../middlewares/book/bookMiddleware')
const { getBook, createBook, updateBook, updateCoverBook, deleteBook } = require('../../../controllers/book/bookController')

// Middleware
// router.use(auth)

// Routes
router.get('/:id?', getBook)
  .post('/', createBook)
  .patch('/:id', validator, updateBook)
  .patch('/cover/:id', updateCoverBook)
  .delete('/:id', deleteBook)

module.exports = router
