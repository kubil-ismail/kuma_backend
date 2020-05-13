const router = require('express').Router()
const auth = require('../../../utils/auth')
const { getAuthor, createAuthor, updateAuthor, deleteAuthor } = require('../../../controllers/book/authorController')

// Middleware
router.use(auth)

// Routes
router.get('/:id?', getAuthor)
router.post('/', createAuthor)
router.patch('/:id', updateAuthor)
router.delete('/:id', deleteAuthor)

module.exports = router
