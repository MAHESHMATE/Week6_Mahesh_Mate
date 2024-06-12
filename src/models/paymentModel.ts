import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';

interface PaymentAttributes {
    id?: string;
    amount: number;
    currency: string;
    charge_date: string;
    reference: string;
    metadata?: Record<string, any>;
    mandateId: string;
}

interface PaymentCreationAttributes extends Optional<PaymentAttributes, 'id'> { }

class Payment extends Model<PaymentAttributes, PaymentCreationAttributes> implements PaymentAttributes {
    public id!: string;
    public amount!: number;
    public currency!: string;
    public charge_date!: string;
    public reference!: string;
    public metadata?: Record<string, any>;
    public mandateId!: string;
}

Payment.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        charge_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        metadata: {
            type: DataTypes.JSONB,
            allowNull: true,
        },
        mandateId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'payments',
        timestamps: true,
    }
);

export { Payment, PaymentAttributes };
