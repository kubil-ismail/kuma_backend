const router = require('express').Router()
const resData = require('../helper/response')

router.get('/', (req, res) => {
  const data = [
    'mantap', 'oke', 'ahsiap'
  ]

  res.send(resData(false, 'oke sip', data))
})

module.exports = router
