const router = require('express').Router()
const auth = require('../../../utils/auth')
const { getFavorite, createFavorite, updateFavorite, deleteFavorite } = require('../../../controllers/book/favoriteController')

// Middleware
router.use(auth)

// Routes
router.get('/:id?', getFavorite)
router.post('/', createFavorite)
router.patch('/:id', updateFavorite)
router.delete('/:id', deleteFavorite)

module.exports = router
