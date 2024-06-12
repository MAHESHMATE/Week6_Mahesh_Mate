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
exports.deleteReviewHandler = exports.getReviewByIdHandler = exports.createReviewHandler = void 0;
const reviewService_1 = require("../services/reviewService");
function createReviewHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const review = yield (0, reviewService_1.createReview)(req.body);
            res.status(201).json(review);
        }
        catch (error) {
            console.error("error creating review", error);
            res.status(500).json({ error: "internal server error" });
        }
    });
}
exports.createReviewHandler = createReviewHandler;
function getReviewByIdHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.bookId;
            const review = yield (0, reviewService_1.getReviewById)(id);
            res.status(200).json(review);
        }
        catch (error) {
            console.error("error finding book by id", error);
            res.status(500).json({ error: "internal server error" });
        }
    });
}
exports.getReviewByIdHandler = getReviewByIdHandler;
function deleteReviewHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const review = yield (0, reviewService_1.deleteReview)(id);
            res.status(200).json(review);
        }
        catch (error) {
            console.error("error deleting review", error);
            res.status(500).json({ error: "internal server error" });
        }
    });
}
exports.deleteReviewHandler = deleteReviewHandler;
//# sourceMappingURL=reviewController.js.map