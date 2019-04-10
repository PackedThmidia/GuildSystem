const express = require('express');
const guilds = require('./api/routes/guilds');
const members = require('./api/routes/members');
const db = require('./db/models/index.js');

const app = express();

db.sequelize.sync();
//db.sequelize.sync();

app.use('/api/guilds', guilds);
app.use('/api/memberships', members);

app.listen(process.env.PORT || 3000);
