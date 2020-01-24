const db = require('../../models')
const Sequelize = require('sequelize')
const User = db.User
const Message = db.Message
const Op = Sequelize.Op

let userController = {
  signIn: (req, res) => {
    /*User.findOne({ where: { email: username } })
      .then(user => {
        console.log(user)
      })*/
    res.send('success to log signin')
  }
}

module.exports = userController