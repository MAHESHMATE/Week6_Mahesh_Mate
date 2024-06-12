"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookReoutes = void 0;
const express_1 = require("express");
const bookController_1 = require("../controllers/bookController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
exports.bookReoutes = router;
router.post('/book', authMiddleware_1.authenticate, bookController_1.createBookHandler);
router.get('/books', bookController_1.getAllBooksHandler);
router.get('/book/:id', bookController_1.getBookByIdHandler);
router.put('/book/:id', authMiddleware_1.authenticate, bookController_1.updateBookHandler);
router.delete('/book/:id', authMiddleware_1.authenticate, bookController_1.deleteBookHandler);
//# sourceMappingURL=bookRoute.js.map