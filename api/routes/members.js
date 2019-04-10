const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
  res.send('Get member info');
});

router.get('/guild/:guildid', (req, res) => {
  res.send('Get specific guild member list');
});

router.get('/user/:userid', (req, res) => {
  res.send('Get specific player member list');
});

router.put(':id', (req, res) => {
  res.send('Update member info');
});

router.delete(':id', (req, res) => {
  res.send('Delete memberp');
});

module.exports = router;
