const Sequelize = require('sequelize');

const sequelize2 = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});
