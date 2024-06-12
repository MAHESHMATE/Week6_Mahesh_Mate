import { Review } from "../models/reviewModel";

async function createReview(reviewData: any) {
    try {
        const review = await Review.create(reviewData);
        return review;
    } catch (error) {
        console.error("error adding review", error);
        throw error;
    }
}

async function getReviewById(id: string) {
    try {
        const review = await Review.findOne({ where: { bookId: id } });
        if (!review) throw new Error("Book not found");

        return review;
    } catch (error) {
        console.error("error getting review by bookId", error);
        throw error;
    }
}

async function deleteReview(id: string) {
    try {
        const review = await Review.findByPk(id);
        if (!review) {
            throw new Error("review not found");
        }
        await review.destroy();
        return { message: "review deleted successfully" };
    } catch (error) {
        console.error("error deleting review", error);
        throw error;
    }
}

export { createReview, getReviewById, deleteReview };
