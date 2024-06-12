"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const bookModel_1 = require("./bookModel");
class Author extends sequelize_1.Model {
}
exports.Author = Author;
Author.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    birthdate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    isSystemUser: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    bookId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: bookModel_1.Book,
            key: "id",
        },
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "authors",
    timestamps: false,
});
//# sourceMappingURL=authorModel.js.map