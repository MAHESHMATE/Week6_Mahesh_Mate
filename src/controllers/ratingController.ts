import { Request, Response, NextFunction } from "express";
import { createRating, getRatingById, } from "../services/ratingService";

async function createRatingHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const rating = await createRating(req.body);
        res.status(201).json(rating);
    } catch (error) {
        console.error("error creating rating", error);
        res.status(500).json({ error: "internal server error" });
    }
}

async function getRatingByIdHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.bookId;
        const rating = await getRatingById(id);
        res.status(200).json(rating);
    } catch (error) {
        console.error("error finding book by id", error);
        res.status(500).json({ error: "internal server error" });
    }
}

export { createRatingHandler, getRatingByIdHandler };

