import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Contract } from './contractModel';
import { Address } from './addressModel';
import { BankDetails } from './bankDetailsModel';

interface AccountAttributes {
  id?: string;
  uid: string;
  name: string;
  email: string;
  bankDetailsUId?: string;
  addressUId?: string;
}

class Account extends Model<AccountAttributes> implements AccountAttributes {
  public id!: string;
  public uid!: string;
  public name!: string;
  public email!: string;
  public bankDetailsUId?: string;
  public addressUId?: string;
}

Account.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bankDetailsUId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: BankDetails,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    addressUId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: Address,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  {
    sequelize,
    tableName: 'accounts',
    timestamps: true

  }
);

Account.hasMany(Contract, { foreignKey: 'accountUId' });
Contract.belongsTo(Account, { foreignKey: 'accountUId' });
Account.belongsTo(Address, { foreignKey: 'addressUId' });
Account.belongsTo(BankDetails, { foreignKey: 'bankDetailsUId' });

export { Account };




