"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const bookModel_1 = require("./bookModel");
const accountModel_1 = require("./accountModel");
class Rating extends sequelize_1.Model {
}
exports.Rating = Rating;
Rating.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: accountModel_1.Account,
            key: 'id',
        },
    },
    bookId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: bookModel_1.Book,
            key: 'id',
        },
    },
    rating: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'ratings',
    timestamps: false,
});
//# sourceMappingURL=ratingModel.js.map