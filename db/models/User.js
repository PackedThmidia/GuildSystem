const sequelize = require('sequelize');

const User = sequelize.define('user', {
  // attributes
  username: {
    type: sequelize.STRING,
    allowNull: true,
  },
}, {
});

module.exports = User;
