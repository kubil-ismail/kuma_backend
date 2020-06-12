const router = require('express').Router()
const auth = require('../../../utils/auth')
const { validCreate, validUpate } = require('../../../middlewares/user/profileMiddleware')
const { getProfile, getProfileNew, getProfileFavorite, createProfile, updateProfile, deleteProfile } = require('../../../controllers/user/profileContoller')

// Middleware
router.use(auth)

// Routes
router.get('/:id?', getProfile)
  .get('/new/:id', getProfileNew)
  .get('/favorite/:id', getProfileFavorite)
  .post('/', validCreate, createProfile)
  .patch('/:id', validUpate, updateProfile)
  .delete('/:id', deleteProfile)

module.exports = router
