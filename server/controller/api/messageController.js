const db = require('../../models')
const Message = db.Message
const User = db.User

let messageController = {
  getMessages: (req, res) => {
    Message.findAll({
      limit: 20,
      order: [['createdAt', 'ASC']],
      include: [User]
    }).then(messages => {
      return res.json({ messages: messages })
    })
  }
}

module.exports = messageController