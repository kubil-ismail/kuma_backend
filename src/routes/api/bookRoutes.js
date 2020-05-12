const router = require('express').Router()
const { getBook, deleteBook } = require('../../controllers/bookController')

router.get('/:id?', getBook)
// router.post('/', createBook)
// router.patch('/:id', updateBook)
router.delete('/:id', deleteBook)

module.exports = router
