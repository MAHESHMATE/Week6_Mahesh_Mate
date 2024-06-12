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
exports.getRatingById = exports.createRating = void 0;
const ratingModel_1 = require("../models/ratingModel");
function createRating(ratingData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rating = yield ratingModel_1.Rating.create(ratingData);
            return rating;
        }
        catch (error) {
            console.error("error adding rating", error);
            throw error;
        }
    });
}
exports.createRating = createRating;
function getRatingById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rating = yield ratingModel_1.Rating.findOne({ where: { bookId: id } });
            if (!rating)
                throw new Error("Book not found");
            return rating;
        }
        catch (error) {
            console.error("error getting rating by bookId", error);
            throw error;
        }
    });
}
exports.getRatingById = getRatingById;
//# sourceMappingURL=ratingService.js.map