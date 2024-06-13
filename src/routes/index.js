// Handles all routes on the web app

import { Router } from 'express';
import AppController from '../controllers/AppController';

const router = Router();

router.get('/', AppController.index);

module.exports = router;
