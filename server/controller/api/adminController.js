const db = require('../../models')
const User = db.User
const Sequelize = require('sequelize')
const Op = Sequelize.Op

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