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
exports.deleteAuthorHandler = exports.updateAuthorHandler = exports.getAuthorByIdHandler = exports.getAllAuthorsHandler = exports.createAuthorHandler = void 0;
const authorService_1 = require("../services/authorService");
function createAuthorHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield (0, authorService_1.createAuthor)(req.body);
            res.status(201).json(author);
        }
        catch (error) {
            console.error('error creating author', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createAuthorHandler = createAuthorHandler;
function getAllAuthorsHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield (0, authorService_1.getAllAuthor)();
            res.status(200).json(author);
        }
        catch (error) {
            console.error('error getting author', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getAllAuthorsHandler = getAllAuthorsHandler;
function getAuthorByIdHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const author = yield (0, authorService_1.getAuthorById)(id);
            res.status(200).json(author);
        }
        catch (error) {
            console.error('error finding author by id', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getAuthorByIdHandler = getAuthorByIdHandler;
function updateAuthorHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const author = yield (0, authorService_1.updateAuthor)(id, updateData);
            res.status(200).json(author);
        }
        catch (error) {
            console.error('error updating author details', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updateAuthorHandler = updateAuthorHandler;
function deleteAuthorHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, authorService_1.deleteAuthor)(id);
            res.status(200).json(result);
        }
        catch (error) {
            console.error('error deleting author', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deleteAuthorHandler = deleteAuthorHandler;
//# sourceMappingURL=authorController.js.map