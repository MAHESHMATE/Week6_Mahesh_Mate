"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const contractModel_1 = require("./contractModel");
const addressModel_1 = require("./addressModel");
const bankDetailsModel_1 = require("./bankDetailsModel");
class Account extends sequelize_1.Model {
}
exports.Account = Account;
Account.init({
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
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    bankDetailsUId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: bankDetailsModel_1.BankDetails,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    addressUId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: addressModel_1.Address,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'accounts',
    timestamps: true
});
Account.hasMany(contractModel_1.Contract, { foreignKey: 'accountUId' });
contractModel_1.Contract.belongsTo(Account, { foreignKey: 'accountUId' });
Account.belongsTo(addressModel_1.Address, { foreignKey: 'addressUId' });
Account.belongsTo(bankDetailsModel_1.BankDetails, { foreignKey: 'bankDetailsUId' });
//# sourceMappingURL=accountModel.js.map