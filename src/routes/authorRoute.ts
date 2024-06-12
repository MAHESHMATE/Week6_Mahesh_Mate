import { Router } from 'express';
import { createAuthorHandler, getAllAuthorsHandler, getAuthorByIdHandler, updateAuthorHandler, deleteAuthorHandler } from '../controllers/authorController';

const router = Router();

router.post('/author', createAuthorHandler);
router.get('/author', getAllAuthorsHandler);
router.get('/author/:id', getAuthorByIdHandler);
router.put('/author/:id', updateAuthorHandler);
router.delete('/author/:id', deleteAuthorHandler);



export { router as authorRoutes };