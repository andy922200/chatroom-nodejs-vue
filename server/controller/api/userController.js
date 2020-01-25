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
      var token = jwt.sign(payload, process.env.JWT_SECRET)
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
  }
}

module.exports = userController