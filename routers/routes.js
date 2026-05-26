import express from 'express';
import { index, show, create, update, partialUpdate, destroy } from '../controllers/postsControllers.js';

const router = express.Router(); 

router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.put('/:id', update);
router.patch('/:id', partialUpdate);
router.delete('/:id', destroy);


export default router;