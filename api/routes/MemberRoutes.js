const express = require('express');
const MemberController = require('../controllers/MemberController');

const router = express.Router();

router.get('/guild/:gid', MemberController.getAllMembers);
router.post('/', MemberController.addMember);
router.get('/:id', MemberController.getAMember);
router.put('/:id', MemberController.updatedMember);
router.delete('/:id', MemberController.deleteMember);

module.exports = router;
