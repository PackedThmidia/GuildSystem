const sequelize = require('sequelize');

const Member = sequelize.define('member', {
  // attributes
  description: {
    type: sequelize.STRING,
    allowNull: true,
  },
}, {
});

module.exports = Member;
