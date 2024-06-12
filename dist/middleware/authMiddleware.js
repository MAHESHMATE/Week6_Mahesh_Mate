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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRoles = exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const credentials_1 = __importDefault(require("../common/credentials"));
function authenticate(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'Access Denied' });
        }
        try {
            const verified = jsonwebtoken_1.default.verify(token, credentials_1.default.postgres.ACCESS_TOKEN_SECRET);
            req.user = verified;
            next();
        }
        catch (err) {
            res.status(400).json({ message: 'Invalid Token' });
        }
    });
}
exports.authenticate = authenticate;
;
function authorizeRoles(...roles) {
    return (req, res, next) => {
        const user = req.user;
        if (!user || !roles.includes(user.role)) {
            return res.status(403).json({ error: 'error' });
        }
        next();
    };
}
exports.authorizeRoles = authorizeRoles;
//# sourceMappingURL=authMiddleware.js.map