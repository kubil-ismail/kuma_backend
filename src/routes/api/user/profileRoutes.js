const router = require('express').Router()
const auth = require('../../../utils/auth')
const { validCreate, validUpate } = require('../../../middlewares/user/profileMiddleware')
const { getProfile, createProfile, updateProfile, deleteProfile } = require('../../../controllers/user/profileContoller')

// Middleware
router.use(auth)

// Routes
router.get('/:id?', getProfile)
router.post('/', validCreate, createProfile)
router.patch('/:id', validUpate, updateProfile)
router.delete('/:id', deleteProfile)

module.exports = router
