const router = require('express').Router()
const auth = require('../../../utils/auth')
const validator = require('../../../middlewares/book/genreMiddleware')
const { getGenre, createGenre, updateGenre, deleteGenre } = require('../../../controllers/book/genreController')

// Middleware
// router.use(auth)

// Routes
router.get('/:id?', getGenre)
  .post('/', auth, validator, createGenre)
  .patch('/:id', auth, validator, updateGenre)
  .delete('/:id', auth, deleteGenre)

module.exports = router
