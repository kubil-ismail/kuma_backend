const router = require('express').Router()
const auth = require('../../../utils/auth')
const { getAuthor, createAuthor, updateAuthor, deleteAuthor } = require('../../../controllers/book/authorController')

router.get('/:id?', auth, getAuthor)
router.post('/', auth, createAuthor)
router.patch('/:id', auth, updateAuthor)
router.delete('/:id', auth, deleteAuthor)

module.exports = router
