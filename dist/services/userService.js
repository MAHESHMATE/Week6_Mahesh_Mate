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
exports.deleteUser = exports.updateUser = exports.getUsers = exports.createUser = void 0;
const accountModel_1 = require("../models/accountModel");
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const query = 'INSERT INTO users (id, name, email) VALUES ($1, $2, $3)';
            // let result = await pool.query(query, [id,name, email])
            const newUser = yield accountModel_1.Account.create(user);
            if (newUser) {
                return newUser;
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.createUser = createUser;
// Read
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        // const query = 'SELECT * FROM users';
        // const result = await pool.query(query);
        // return result.rows;
        const users = yield accountModel_1.Account.findAll();
        return users;
    });
}
exports.getUsers = getUsers;
// Update
function updateUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        // const query = 'UPDATE users SET name = $2, email = $3 WHERE id = $1';
        // await pool.query(query, [id, name, email]);
        try {
            const userEntity = yield accountModel_1.Account.findByPk(user.id);
            if (!userEntity) {
                return "User not found !";
            }
            yield userEntity.update(user);
            return "User updated successfully";
        }
        catch (err) {
            return `Error updating user due to ${err.message}`;
        }
    });
}
exports.updateUser = updateUser;
// Delete
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        // const query = 'DELETE FROM users WHERE id = $1';
        // await pool.query(query, [id]);
        try {
            const userEntity = yield accountModel_1.Account.findByPk(id);
            if (!userEntity) {
                return "User not found !";
            }
            yield userEntity.destroy();
            return "User updated successfully";
        }
        catch (err) {
            return `Error updating user due to ${err.message}`;
        }
    });
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=userService.js.map