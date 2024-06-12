import { Router } from 'express';
import { createBookHandler, getAllBooksHandler, getBookByIdHandler, updateBookHandler, deleteBookHandler } from '../controllers/bookController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

router.post('/book', authenticate, createBookHandler);
router.get('/books', getAllBooksHandler);
router.get('/book/:id', getBookByIdHandler);
router.put('/book/:id', authenticate, updateBookHandler);
router.delete('/book/:id', authenticate, deleteBookHandler);



export { router as bookReoutes };