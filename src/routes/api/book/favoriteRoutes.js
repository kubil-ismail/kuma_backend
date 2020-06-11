const router = require('express').Router()
const auth = require('../../../utils/auth')
const validator = require('../../../middlewares/book/favoriteMiddleware')
const { getFavorite, createFavorite, updateFavorite, deleteFavorite } = require('../../../controllers/book/favoriteController')

// Middleware
router.use(auth)

// Routes
router.get('/:id?', getFavorite)
  .post('/', validator, createFavorite)
  .patch('/:id', validator, updateFavorite)
  .delete('/:id', deleteFavorite)

module.exports = router
