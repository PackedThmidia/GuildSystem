const express = require('express');

const guilds = require('./api/routes/guilds.js');
const members = require('./api/routes/members.js');

const app = express();

app.use('/api/guilds', guilds);
app.use('/api/memberships', members);

app.listen(process.env.PORT || 3000);
