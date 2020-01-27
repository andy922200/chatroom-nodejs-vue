const express = require('express')
const router = express.Router()
const passport = require('../config/passport')
const userController = require('../controller/api/userController')

// for authentication
const authenticated = passport.authenticate('jwt', { session: false })
const authenticatedAdmin = (req, res, next) => {
  if (req.user) {
    if (req.user.isAdmin) { return next() }
    return res.json({ status: 'error', message: 'permission denied' })
  } else {
    return res.json({ status: 'error', message: 'permission denied' })
  }
}

// register, logIn, token validation
router.get(`/get_current_user`, authenticated, userController.getCurrentUser)
router.get(`/users/:id`, authenticated, userController.getUser)
router.post('/signin', userController.signIn)
router.post('/signup', userController.signUp)

module.exports = router