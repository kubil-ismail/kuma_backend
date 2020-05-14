const router = require('express').Router()
const auth = require('../../../utils/auth')
const validator = require('../../../middlewares/book/bookMiddleware')
const { getBook, createBook, updateBook, updateCoverBook, deleteBook } = require('../../../controllers/book/bookController')

// Middleware
router.use(auth)

// Routes
router.get('/:id?', getBook)
router.post('/', createBook)
router.patch('/:id', validator, updateBook)
router.patch('/cover/:id', updateCoverBook)
router.delete('/:id', deleteBook)

module.exports = router
