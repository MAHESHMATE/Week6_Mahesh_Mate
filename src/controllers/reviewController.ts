import { Request, Response, NextFunction } from "express";
import { createReview, deleteReview, getReviewById, } from "../services/reviewService";

async function createReviewHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const review = await createReview(req.body);
        res.status(201).json(review);
    } catch (error) {
        console.error("error creating review", error);
        res.status(500).json({ error: "internal server error" });
    }
}

async function getReviewByIdHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.bookId;
        const review = await getReviewById(id);
        res.status(200).json(review);
    } catch (error) {
        console.error("error finding book by id", error);
        res.status(500).json({ error: "internal server error" });
    }
}

async function deleteReviewHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;
        const review = await deleteReview(id);
        res.status(200).json(review);
    } catch (error) {
        console.error("error deleting review", error);
        res.status(500).json({ error: "internal server error" });
    }
}

export { createReviewHandler, getReviewByIdHandler, deleteReviewHandler };
