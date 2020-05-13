const router = require('express').Router()
const auth = require('../../../utils/auth')
const validator = require('../../../middlewares/book/genreMiddleware')
const { getGenre, createGenre, updateGenre, deleteGenre } = require('../../../controllers/book/genreController')

// Middleware
router.use(auth)

// Routes
router.get('/:id?', getGenre)
router.post('/', validator, createGenre)
router.patch('/:id', validator, updateGenre)
router.delete('/:id', deleteGenre)

module.exports = router
