const router = require('express').Router()
const auth = require('../../../utils/auth')
const validSosmed = require('../../../middlewares/user/sosmedMiddleware')
const { getSosmed, createSosmed, updateSosmed, deleteSosmed } = require('../../../controllers/user/sosmedController')

// Middleware
router.use(auth)
router.use(validSosmed)

// Routes
router.get('/:id?', getSosmed)
  .post('/', createSosmed)
  .patch('/:id', updateSosmed)
  .delete('/:id', deleteSosmed)

module.exports = router
