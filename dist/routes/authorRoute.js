"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRoutes = void 0;
const express_1 = require("express");
const authorController_1 = require("../controllers/authorController");
const router = (0, express_1.Router)();
exports.authorRoutes = router;
router.post('/author', authorController_1.createAuthorHandler);
router.get('/author', authorController_1.getAllAuthorsHandler);
router.get('/author/:id', authorController_1.getAuthorByIdHandler);
router.put('/author/:id', authorController_1.updateAuthorHandler);
router.delete('/author/:id', authorController_1.deleteAuthorHandler);
//# sourceMappingURL=authorRoute.js.map