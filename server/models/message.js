'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    content: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Message.associate = function (models) {
    Message.belongsTo(models.User)
  };
  return Message;
};