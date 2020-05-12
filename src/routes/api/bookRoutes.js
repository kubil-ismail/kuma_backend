const router = require('express').Router()
const { getBook, createBook, updateBook, updateCoverBook, deleteBook } = require('../../controllers/bookController')

router.get('/:id?', getBook)
router.post('/', createBook)
router.patch('/:id', updateBook)
router.patch('/cover/:id', updateCoverBook)
router.delete('/:id', deleteBook)

module.exports = router
