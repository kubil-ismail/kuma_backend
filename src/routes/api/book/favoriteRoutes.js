const router = require('express').Router()
const auth = require('../../../utils/auth')
const validator = require('../../../middlewares/book/favoriteMiddleware')
const { getFavorite, createFavorite, updateFavorite, deleteFavorite } = require('../../../controllers/book/favoriteController')

// Middleware
router.use(auth)

// Routes
router.get('/:id?', getFavorite)
router.post('/', validator, createFavorite)
router.patch('/:id', validator, updateFavorite)
router.delete('/:id', deleteFavorite)

module.exports = router
