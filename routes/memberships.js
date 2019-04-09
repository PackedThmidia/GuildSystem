const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
  res.send('Get membership info');
});

router.get('/guild/:guildid', (req, res) => {
  res.send('Get specific guild membership list');
});

router.get('/user/:userid', (req, res) => {
  res.send('Get specific player membership list');
});

router.put(':id', (req, res) => {
  res.send('Update membership info');
});

router.delete(':id', (req, res) => {
  res.send('Delete membership');
});

module.exports = router;
