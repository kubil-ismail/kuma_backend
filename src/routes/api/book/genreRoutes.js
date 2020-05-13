const router = require('express').Router()
const auth = require('../../../utils/auth')
const { getGenre, createGenre, updateGenre, deleteGenre } = require('../../../controllers/book/genreController')

// Middleware
router.use(auth)

// Routes
router.get('/:id?', auth, getGenre)
router.post('/', auth, createGenre)
router.patch('/:id', auth, updateGenre)
router.delete('/:id', auth, deleteGenre)

module.exports = router
