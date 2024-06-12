import { Router } from "express";
import { createReviewHandler, getReviewByIdHandler, deleteReviewHandler } from "../controllers/reviewController";
import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.post("/book/:bookId/reviews", authenticate, createReviewHandler);
router.get("/book/:bookId/reviews", getReviewByIdHandler);
router.delete("/reviews/:id", deleteReviewHandler);

export { router as reviewReoutes };
