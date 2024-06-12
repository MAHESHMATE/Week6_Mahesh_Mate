"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankDetails = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class BankDetails extends sequelize_1.Model {
}
exports.BankDetails = BankDetails;
BankDetails.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    uid: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
    accountNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    accountName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    bankAddress: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sortCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'bank_details',
    timestamps: true
});
//# sourceMappingURL=bankDetailsModel.js.map