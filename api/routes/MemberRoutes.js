import { Router } from 'express';
import MemberController from '../controllers/MemberController';

const router = Router();

router.get('/', MemberController.getAllGuilds);
router.post('/', MemberController.addGuild);
router.get('/:id', MemberController.getAGuild);
router.put('/:id', MemberController.updatedGuild);
router.delete('/:id', MemberController.deleteGuild);

module.exports = router;
