const express = require('express')
const router = express.Router()

router.use('/public-chatroom', (req, res) => {
  res.send('This is "public-chatroom" page.')
})
//router.get('/public-chatroom',)

module.exports = router