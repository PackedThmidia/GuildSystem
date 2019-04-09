const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('None');
});

router.get('/:id', (req, res) => {
  res.send('Specific guild');
});

router.post('/', (req, res) => {
  res.send('New guild creation');
});

router.update('/:id', (req, res) => {
  res.send('Updates sth withing guild');
});

router.delete('/:id', (req, res) => {
  res.send('Delete specific guild');
});

module.exports = router;
