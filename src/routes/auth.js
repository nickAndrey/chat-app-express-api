import { Router } from 'express';
import controller from '../controllers/index.js';

const router = Router();

router.post('/refresh-token', controller.auth.refreshToken);
router.post('/login', controller.auth.login);
router.post('/sign-up', controller.auth.signUp);

export default router;
