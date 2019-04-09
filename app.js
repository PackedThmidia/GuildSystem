const express = require('express');

const guilds = require('./routes/guilds');
const membership = require('./routes/memberships');

const app = express();

app.use('/api/guilds', guilds);
app.use('/api/memberships', membership);

app.listen(process.env.PORT || 3000);
