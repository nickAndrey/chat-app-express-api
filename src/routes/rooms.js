import { Router } from 'express';
import controller from '../controllers/index.js';

const router = Router();

router.post('/', controller.rooms.create);
router.get('/:id', controller.rooms.getById);
router.put('/:id', controller.rooms.update);
router.delete('/:id', controller.rooms.delete);
router.post('/:id/members', controller.rooms.addMember);
router.delete('/:id/members/:uid', controller.rooms.delete);

export default router;
