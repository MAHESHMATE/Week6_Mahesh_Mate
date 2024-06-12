import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import { Book } from "./bookModel";

interface AuthorAttributes {
  id: string;
  name: string;
  bio: string;
  birthdate: Date;
  isSystemUser: boolean;
  bookId: string;
}

interface AuthorCreationAttributes extends Optional<AuthorAttributes, "id"> { }

class Author
  extends Model<AuthorAttributes, AuthorCreationAttributes>
  implements AuthorAttributes {
  public id!: string;
  public name!: string;
  public bio!: string;
  public birthdate!: Date;
  public isSystemUser!: boolean;
  public bookId!: string;

}

Author.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isSystemUser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.UUID,
      references: {
        model: Book,
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "authors",
    timestamps: false,
  }
);

export { Author };
