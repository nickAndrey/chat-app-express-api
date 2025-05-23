import { Router } from 'express';
import controller from '../controllers/index.js';

const router = Router();

router.post('/', controller.messages.create);
router.get('/', controller.messages.getAll);
router.delete('/:id', controller.messages.delete);

export default router;
