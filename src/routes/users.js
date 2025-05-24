import { Router } from 'express';
import controller from '../controllers/index.js';

const router = Router();

router.get('/', controller.users.getAll);
router.get('/:id', controller.users.getById);
router.put('/:id', controller.users.update);

export default router;
