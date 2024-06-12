"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.getReviewById = exports.createReview = void 0;
const reviewModel_1 = require("../models/reviewModel");
function createReview(reviewData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const review = yield reviewModel_1.Review.create(reviewData);
            return review;
        }
        catch (error) {
            console.error("error adding review", error);
            throw error;
        }
    });
}
exports.createReview = createReview;
function getReviewById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const review = yield reviewModel_1.Review.findOne({ where: { bookId: id } });
            if (!review)
                throw new Error("Book not found");
            return review;
        }
        catch (error) {
            console.error("error getting review by bookId", error);
            throw error;
        }
    });
}
exports.getReviewById = getReviewById;
function deleteReview(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const review = yield reviewModel_1.Review.findByPk(id);
            if (!review) {
                throw new Error("review not found");
            }
            yield review.destroy();
            return { message: "review deleted successfully" };
        }
        catch (error) {
            console.error("error deleting review", error);
            throw error;
        }
    });
}
exports.deleteReview = deleteReview;
//# sourceMappingURL=reviewService.js.map