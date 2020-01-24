const express = require('express')
const router = express.Router()
const userController = require('../controller/api/userController')

router.get('/public-chatroom', userController.signIn)

module.exports = router