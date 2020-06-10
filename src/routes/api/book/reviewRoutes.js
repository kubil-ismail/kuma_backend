const router = require('express').Router()
const auth = require('../../../utils/auth')
const validator = require('../../../middlewares/book/reviewMiddleware')
const { getReview, createReview, updateReview, deleteReview } = require('../../../controllers/book/reviewController')

// Middleware
// router.use(auth)

// Routes
router.get('/:id?', getReview)
  .post('/', validator, createReview)
  .patch('/:id', validator, updateReview)
  .delete('/:id', deleteReview)

module.exports = router
