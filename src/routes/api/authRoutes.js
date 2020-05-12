const router = require('express').Router()
const { loginAuth, registerAuth } = require('../../controllers/authController')

router.post('/login', loginAuth)
router.post('/signin', registerAuth)

module.exports = router
