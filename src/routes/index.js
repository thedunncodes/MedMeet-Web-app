// Handles all routes on the web app

import { Router } from 'express';
import AppController from '../controllers/AppController.js';

const router = Router();

router.get('/', AppController.index);

export default router;
