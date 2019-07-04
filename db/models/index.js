const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const configJson = require('../../config/config');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const config = configJson[env];

console.log('this is the environment: ', env);

const db = {};
let sequelize;
if (config.environment === 'production') {
  sequelize = new Sequelize(
    process.env.SQL_DATABASE,
    process.env.SQL_USER,
    process.env.SQL_PASSWORD,
    {
      host: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
      port: 5432,
      dialect: 'postgres',
      dialectOption: {
        ssl: true,
        native: true,
        socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
      },
      logging: true
    }
  );
} else {
  sequelize = new Sequelize(
    config.database, config.username, config.password, config
  );
}

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0)
           && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
