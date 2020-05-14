const router = require('express').Router()
const { loginAuth, registerAuth, activateAuth } = require('../../controllers/authController')
const validator = require('../../middlewares/authMiddleware')

// Middleware
router.use(validator)

// routes
router.post('/login', loginAuth)
router.post('/signin', registerAuth)
router.post('/activate', activateAuth)

module.exports = router
