import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Book } from './bookModel';
import { Account } from './accountModel';

interface RatingAttributes {
    id: string;
    userId: string;
    bookId: string;
    rating: number;
}

interface RatingCreationAttributes extends Optional<RatingAttributes, 'id'> { }

class Rating extends Model<RatingAttributes, RatingCreationAttributes> implements RatingAttributes {
    public id!: string;
    public userId!: string;
    public bookId!: string;
    public rating!: number;

}

Rating.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Account,
                key: 'id',
            },
        },
        bookId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Book,
                key: 'id',
            },
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'ratings',
        timestamps: false,
    }
);

export { Rating };




