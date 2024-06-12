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
exports.deleteUserController = exports.updateUserController = exports.getUser = exports.addUser = void 0;
const userService_1 = require("../services/userService");
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, email } = req.body;
    yield (0, userService_1.createUser)(req.body);
    res.send("user created successfully");
});
exports.addUser = addUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userService_1.getUsers)();
    res.json(users);
});
exports.getUser = getUser;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userService_1.updateUser)(req.body);
        res.send(result);
    }
    catch (err) {
        res.status(500).send(`error updating user: ${err.message}`);
    }
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield (0, userService_1.deleteUser)(parseInt(id));
        res.send(result);
    }
    catch (err) {
        res.status(500).send(`error deleting user: ${err.message}`);
    }
});
exports.deleteUserController = deleteUserController;
//# sourceMappingURL=userController.js.map