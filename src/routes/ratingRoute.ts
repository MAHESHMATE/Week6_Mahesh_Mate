import { Router } from "express";
import { createRatingHandler, getRatingByIdHandler } from "../controllers/ratingController";
import { authenticate, authorizeRoles } from "../middleware/authMiddleware";

const router = Router();

router.post("/book/:bookId/ratings", authenticate, authorizeRoles("User"), createRatingHandler);
router.get("/book/:bookId/ratings", getRatingByIdHandler);

export { router as ratingReoutes };