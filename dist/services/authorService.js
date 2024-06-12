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
exports.deleteAuthor = exports.updateAuthor = exports.getAuthorById = exports.getAllAuthor = exports.createAuthor = void 0;
const authorModel_1 = require("../models/authorModel");
function createAuthor(authorData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield authorModel_1.Author.create(authorData);
            return author;
        }
        catch (error) {
            console.error('error creating author', error);
            throw error;
        }
    });
}
exports.createAuthor = createAuthor;
function getAllAuthor() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield authorModel_1.Author.findAll();
            return author;
        }
        catch (error) {
            console.error('error getting list of author', error);
            throw error;
        }
    });
}
exports.getAllAuthor = getAllAuthor;
function getAuthorById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield authorModel_1.Author.findByPk(id);
            if (!author)
                throw new Error('author not found');
            return author;
        }
        catch (error) {
            console.error('error getting author', error);
            throw error;
        }
    });
}
exports.getAuthorById = getAuthorById;
function updateAuthor(id, authorData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield authorModel_1.Author.findByPk(id);
            if (!author) {
                throw new Error('author not found');
            }
            yield author.update(authorData);
            return author;
        }
        catch (error) {
            console.error('error updating author details', error);
            throw error;
        }
    });
}
exports.updateAuthor = updateAuthor;
function deleteAuthor(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield authorModel_1.Author.findByPk(id);
            if (!author) {
                throw new Error('author not found');
            }
            yield author.destroy();
            return { message: 'author deleted successfully' };
        }
        catch (error) {
            console.error('error deleting author', error);
            throw error;
        }
    });
}
exports.deleteAuthor = deleteAuthor;
//# sourceMappingURL=authorService.js.map