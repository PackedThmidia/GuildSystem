import bodyParser from 'body-parser';
import db from './db/models/index';
import guildRoutes from './api/routes/GuildRoutes';

const express = require('express');
const random = require('lodash.random');
const times = require('lodash.times');
const faker = require('faker');

//const members = require('./api/routes/members');


const app = express();
db.sequelize.sync();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/guilds', guildRoutes);
//app.use('/api/members', members);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

db.Guild.destroy({
  where: {},
  truncate: true,
  cascade: true,
});
// ALTER SEQUENCE product_id_seq RESTART WITH 1453

db.sequelize.query('ALTER SEQUENCE "Guilds_id_seq" RESTART WITH 1;');


db.Guild.bulkCreate(
  times(10, () => ({
    name: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    leader: faker.lorem.sentence(),
  })),
);

app.listen(process.env.PORT || 3000);

export default app;
