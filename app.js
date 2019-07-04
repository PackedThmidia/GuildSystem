const bodyParser = require('body-parser');
const db = require('./db/models/index');
const guildRoutes = require('./api/routes/GuildRoutes');
const memberRoutes = require('./api/routes/MemberRoutes');
const random = require('lodash.random');
const times = require('lodash.times');
const faker = require('faker');
const express = require('express');
const app = express();

const server = require('http').createServer(app);
server.listen(65080, () => {
  console.log(`--------- SERVER IS RUNNING, PORT: 65080`);
});
const io = require('./websocket/socketio/SOCKETIO.js').listen(server);

db.sequelize.sync();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/guilds', guildRoutes);
app.use('/api/members', memberRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the Guild System API.',
}));

db.Member.destroy({
  where: {},
  truncate: true,
  cascade: true,
});
db.Member.bulkCreate(
  times(1, () => ({
    description: faker.lorem.sentence(),
    GuildId: 2,
    UserId: 2
  })),
).catch((error) => { console.log(error); });
app.listen(process.env.PORT || 3000);


module.exports = { app };
