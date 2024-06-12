"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewReoutes = void 0;
const express_1 = require("express");
const reviewController_1 = require("../controllers/reviewController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
exports.reviewReoutes = router;
router.post("/book/:bookId/reviews", authMiddleware_1.authenticate, reviewController_1.createReviewHandler);
router.get("/book/:bookId/reviews", reviewController_1.getReviewByIdHandler);
router.delete("/reviews/:id", reviewController_1.deleteReviewHandler);
//# sourceMappingURL=reviewRoute.js.map