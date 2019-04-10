const sequelize = require('sequelize');

const Guild = sequelize.define('guild', {
  // attributes
  status: {
    type: sequelize.STRING,
    allowNull: false,
  },
}, {
});

module.exports = Guild;
