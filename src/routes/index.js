const router = require('express').Router()

router.get('/', (req, res) => {
  res.send({ status: true, message: 'welcome to Kuma Book' })
})

module.exports = router
