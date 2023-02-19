import {Router} from 'express';
import {ping} from '../controllers/index.controller.js'

const router = Router();

// test avec la base de données => ok
router.get('/ping', ping);

export default router;

