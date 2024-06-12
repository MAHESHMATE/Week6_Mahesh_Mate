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
exports.deleteBook = exports.updateBook = exports.getBookById = exports.getAllBooks = exports.createBook = void 0;
const bookModel_1 = require("../models/bookModel");
function createBook(bookData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield bookModel_1.Book.create(bookData);
            return book;
        }
        catch (error) {
            console.error('error adding book', error);
            throw error;
        }
    });
}
exports.createBook = createBook;
function getAllBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield bookModel_1.Book.findAll();
            return book;
        }
        catch (error) {
            console.error('error getting all books', error);
            throw error;
        }
    });
}
exports.getAllBooks = getAllBooks;
function getBookById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield bookModel_1.Book.findByPk(id);
            if (!book)
                throw new Error('Book not found');
            return book;
        }
        catch (error) {
            console.error('error getting book', error);
            throw error;
        }
    });
}
exports.getBookById = getBookById;
function updateBook(id, bookData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield bookModel_1.Book.findByPk(id);
            if (!book) {
                throw new Error('book not found');
            }
            yield book.update(bookData);
            return book;
        }
        catch (error) {
            console.error('error updating book details', error);
            throw error;
        }
    });
}
exports.updateBook = updateBook;
function deleteBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield bookModel_1.Book.findByPk(id);
            if (!book) {
                throw new Error('book not found');
            }
            yield book.destroy();
            return { message: 'book deleted successfully' };
        }
        catch (error) {
            console.error('error deleting book', error);
            throw error;
        }
    });
}
exports.deleteBook = deleteBook;
//# sourceMappingURL=bookService.js.map