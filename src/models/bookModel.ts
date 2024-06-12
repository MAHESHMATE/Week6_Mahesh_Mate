import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';

interface BookAttributes {
  id: string;
  bookCode: string;
  title: string;
  description: string;
  publishedYear: string;
  price: string;
  author: string;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> { }

class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: string;
  public bookCode!: string;
  public title!: string;
  public description!: string;
  public publishedYear!: string;
  public price!: string;
  public author!: string;

}

Book.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    bookCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedYear: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'books',
    timestamps: false,
  }
);






export { Book };



