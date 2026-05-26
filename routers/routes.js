import express from 'express'

const router = express.Router(); 

router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.put('/:id', update);
router.patch('/:id', partialUpdate);
router.delete('/:id', destroy);


export default router;