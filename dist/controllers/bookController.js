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
exports.deleteBookHandler = exports.updateBookHandler = exports.getBookByIdHandler = exports.getAllBooksHandler = exports.createBookHandler = void 0;
const bookService_1 = require("../services/bookService");
function createBookHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield (0, bookService_1.createBook)(req.body);
            res.status(201).json(book);
        }
        catch (error) {
            console.error('error creating book', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createBookHandler = createBookHandler;
function getAllBooksHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield (0, bookService_1.getAllBooks)();
            res.status(200).json(books);
        }
        catch (error) {
            console.error('error getting books', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getAllBooksHandler = getAllBooksHandler;
function getBookByIdHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const book = yield (0, bookService_1.getBookById)(id);
            res.status(200).json(book);
        }
        catch (error) {
            console.error('error finding book by id', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getBookByIdHandler = getBookByIdHandler;
function updateBookHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const book = yield (0, bookService_1.updateBook)(id, updateData);
            res.status(200).json(book);
        }
        catch (error) {
            console.error('error updating book details', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updateBookHandler = updateBookHandler;
function deleteBookHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, bookService_1.deleteBook)(id);
            res.status(200).json(result);
        }
        catch (error) {
            console.error('error deleting book', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deleteBookHandler = deleteBookHandler;
//# sourceMappingURL=bookController.js.map