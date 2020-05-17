const router = require('express').Router()
const resData = require('../helper/response')

router.get('/', (req, res) => {
  res.send(resData(true, 'Welcome to kuma backend'))
})

module.exports = router
