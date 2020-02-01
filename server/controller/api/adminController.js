const db = require('../../models')
const User = db.User
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcryptjs')

let adminController = {
  getUsers: (req, res) => {
    User.findAll({
      attributes: {
        exclude: ['password']
      }
    }).then(users => {
      return res.json({ users: users })
    })
  },
  getUser: (req, res) => {
    User.findByPk(req.params.id, {
      attributes: {
        exclude: ['password']
      }
    }).then(user => {
      if (!user) res.status(401).json({ status: 'error', message: 'No user was found.' })
      return res.json({ user: user })
    })
  },
  createUser: (req, res) => {
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
            isAdmin: req.body.isAdmin
          }).then(user => {
            return res.json({ status: 'success', message: 'Register successfully!' })
          })
        }
      })
  },
  putUser: (req, res) => {
    User.findByPk(req.params.id).then(user => {
      const { name, email, password, isAdmin } = req.body
      user.update({
        name: name,
        email: email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10), null),
        isAdmin: isAdmin
      }).then(user => {
        return res.json({ status: 'success', message: 'Update successfully!' })
      })
    })
  },
  putRole: (req, res) => {
    User.findByPk(req.params.id).then(user => {
      const { isAdmin } = user
      if (isAdmin) {
        user.update({ isAdmin: false })
          .then(user => {
            return res.json({
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
              }
            })
          })
      } else {
        user.update({ isAdmin: true })
          .then(user => {
            return res.json({
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
              }
            })
          })
      }
    })
  },
  deleteUser: (req, res) => {
    User.findByPk(req.params.id)
      .then(user => {
        if (!user) res.status(401).json({ status: 'error', message: 'No user was found.' })
        user.destroy().then(user => {
          return res.json({
            status: 'success', message: `${user.name} was deleted successfully.`
          })
        })
      })
  }
}

module.exports = adminController