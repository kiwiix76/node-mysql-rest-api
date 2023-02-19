import {Router} from 'express'
import {getPlantes, createPlantes, updatePlantes, deletePlantes, getPlante} from '../controllers/plantes.controller.js';

const router = Router();

// creation des routes et test en ligne => ok
router.get('/plantes', getPlantes);

router.get('/plantes/:id', getPlante);

router.post('/plantes', createPlantes);

router.patch('/plantes/:id', updatePlantes);

router.delete('/plantes/:id', deletePlantes);

export default router;