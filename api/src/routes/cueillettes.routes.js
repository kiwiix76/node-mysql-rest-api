import {Router} from 'express'
import {getCueillettes, createCueillettes, updateCueillettes, deleteCueillettes, getCueillette} from '../controllers/cueillettes.controller.js';

const router = Router();

// creation des routes et test en ligne => ok
router.get('/cueillettes', getCueillettes);

router.get('/cueillettes/:id', getCueillette);

router.post('/cueillettes', createCueillettes);

router.patch('/cueillettes/:id', updateCueillettes);

router.delete('/cueillettes/:id', deleteCueillettes);

export default router;