import { Router } from 'express';
import controller from '../controllers/index.js';

const router = Router();

router.get('/', controller.users.getAll);
router.get('/:id/rooms', controller.users.getAllRelatedRooms);
router.get('/:id', controller.users.getById);
router.put('/:id', controller.users.update);
router.post('/search', controller.users.search);

export default router;
