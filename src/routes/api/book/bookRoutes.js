const router = require('express').Router()
const auth = require('../../../utils/auth')
const { getBook, createBook, updateBook, updateCoverBook, deleteBook } = require('../../../controllers/book/bookController')

// Middleware
router.use(auth)

// Routes
router.get('/:id?', auth, getBook)
router.post('/', auth, createBook)
router.patch('/:id', auth, updateBook)
router.patch('/cover/:id', auth, updateCoverBook)
router.delete('/:id', auth, deleteBook)

module.exports = router
