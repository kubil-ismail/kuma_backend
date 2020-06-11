const router = require('express').Router()
const auth = require('../../../utils/auth')
const validator = require('../../../middlewares/book/authorMiddleware')
const { getAuthor, createAuthor, updateAuthor, deleteAuthor } = require('../../../controllers/book/authorController')

// Middleware
router.use(auth)

// Routes
router.get('/:id?', getAuthor)
  .post('/', validator, createAuthor)
  .patch('/:id', validator, updateAuthor)
  .delete('/:id', deleteAuthor)

module.exports = router
