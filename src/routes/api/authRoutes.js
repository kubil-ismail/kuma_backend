const router = require('express').Router()
const { loginAuth, registerAuth } = require('../../controllers/authController')
const validator = require('../../middlewares/authMiddleware')

// Middleware
router.use(validator)

// routes
router.post('/login', loginAuth)
router.post('/signin', registerAuth)

module.exports = router
