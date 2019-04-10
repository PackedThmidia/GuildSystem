const sequelize = require('sequelize');

const User = sequelize.define('user', {
  // attributes
  username: {
    type: sequelize.STRING,
    allowNull: false,
  },
}, {
});

module.exports = User;
