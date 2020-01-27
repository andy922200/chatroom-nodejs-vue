const db = require('../../models')
const User = db.User
// for signIn authentication
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

let userController = {
  signIn: (req, res) => {
    let username = req.body.email
    let password = req.body.password
    User.findOne({
      where: { email: username }
    }).then(user => {
      if (!user) return res.status(401).json({ status: 'error', message: 'No user was found.' })
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ status: 'error', message: 'The password did not match.' })
      }
      var payload = { id: user.id }
      var token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })
      return res.json({
        status: 'success',
        message: 'OK',
        token: token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin
        }
      })
    })
  },
  signUp: (req, res) => {
    if (req.body.password !== req.body.passwordCheck) {
      return res.json({ status: 'error', message: 'Two Passwords do not match!' })
    }
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (user) {
          return res.json({ status: 'error', message: 'The email has already used!' })
        } else {
          User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null),
            isAdmin: 0
          }).then(user => {
            return res.json({ status: 'success', message: 'Register successfully!' })
          })
        }
      })
  },
  getCurrentUser: (req, res) => {
    return res.json({
      status: 'success',
      message: 'OK'
    })
  },
  getUser: (req, res) => {
    User.findByPk(req.params.id).then(user => {
      if (!user) return res.status(401).json({ status: 'error', message: 'No user was found.' })
      return res.json({
        status: 'success',
        message: 'OK',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin
        }
      })
    })
  }
}

module.exports = userController