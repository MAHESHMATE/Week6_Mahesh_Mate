import express from 'express';
import { addUser, getUser, updateUserController, deleteUserController } from '../controllers/userController';
import { authenticate } from '../middleware/authMiddleware';


const router = express.Router();

router.post('/user', addUser);

router.get('/user', getUser);

router.put('/user', authenticate, updateUserController);

router.delete('/:id', authenticate, deleteUserController);

export { router as userRoutes };