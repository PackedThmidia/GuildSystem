const express = require('express');
const GuildController = require('../controllers/GuildController');

const router = express.Router();

router.get('/', GuildController.getAllGuilds);
router.post('/', GuildController.addGuild);
router.get('/:id', GuildController.getAGuild);
router.put('/:id', GuildController.updatedGuild);
router.delete('/:id', GuildController.deleteGuild);

module.exports = router;
