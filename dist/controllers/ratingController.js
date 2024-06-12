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
exports.getRatingByIdHandler = exports.createRatingHandler = void 0;
const ratingService_1 = require("../services/ratingService");
function createRatingHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rating = yield (0, ratingService_1.createRating)(req.body);
            res.status(201).json(rating);
        }
        catch (error) {
            console.error("error creating rating", error);
            res.status(500).json({ error: "internal server error" });
        }
    });
}
exports.createRatingHandler = createRatingHandler;
function getRatingByIdHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.bookId;
            const rating = yield (0, ratingService_1.getRatingById)(id);
            res.status(200).json(rating);
        }
        catch (error) {
            console.error("error finding book by id", error);
            res.status(500).json({ error: "internal server error" });
        }
    });
}
exports.getRatingByIdHandler = getRatingByIdHandler;
//# sourceMappingURL=ratingController.js.map