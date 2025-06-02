import { Router } from 'express';
import controller from '../controllers/index.js';

const router = Router();

router.post('/', controller.rooms.create);
router.get('/:id', controller.rooms.get);
router.put('/:id', controller.rooms.update);
router.post('/:id/soft-delete', controller.rooms.delete);

router.post('/:id/members', controller.rooms.addMember);
router.get('/:id/messages', controller.rooms.getMessages);
router.post('/:id/messages', controller.rooms.createMessage);
router.post('/:id/messages/:messageId/remove', controller.rooms.deleteMessage);

export default router;
