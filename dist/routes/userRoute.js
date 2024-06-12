"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
exports.userRoutes = router;
router.post('/user', userController_1.addUser);
router.get('/user', userController_1.getUser);
router.put('/user', authMiddleware_1.authenticate, userController_1.updateUserController);
router.delete('/:id', authMiddleware_1.authenticate, userController_1.deleteUserController);
//# sourceMappingURL=userRoute.js.map