"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingReoutes = void 0;
const express_1 = require("express");
const ratingController_1 = require("../controllers/ratingController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
exports.ratingReoutes = router;
router.post("/book/:bookId/ratings", authMiddleware_1.authenticate, (0, authMiddleware_1.authorizeRoles)("User"), ratingController_1.createRatingHandler);
router.get("/book/:bookId/ratings", ratingController_1.getRatingByIdHandler);
//# sourceMappingURL=ratingRoute.js.map