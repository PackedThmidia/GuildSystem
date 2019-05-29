import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', UserController.getAllGuilds);
router.post('/', UserController.addGuild);
router.get('/:id', UserController.getAGuild);
router.put('/:id', UserController.updatedGuild);
router.delete('/:id', UserController.deleteGuild);

module.exports = router;
