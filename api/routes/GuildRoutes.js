import express from 'express';
import GuildController from '../controllers/GuildController';

const router = express.Router();

router.get('/', GuildController.getAllGuilds);
router.post('/', GuildController.addGuild);
router.get('/:id', GuildController.getAGuild);
router.put('/:id', GuildController.updatedGuild);
router.delete('/:id', GuildController.deleteGuild);

export default router;
