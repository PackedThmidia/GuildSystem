const sequelize = require('sequelize');

const Member = sequelize.define('user', {
  // attributes
  description: {
    type: sequelize.STRING,
    allowNull: true,
  },
}, {
});

module.exports = Member;
