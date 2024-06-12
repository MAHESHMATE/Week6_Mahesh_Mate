import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import { Book } from "./bookModel";
import { Account } from "./accountModel";

interface ReviewAttributes {
  id: string;
  userId: string;
  bookId: string;
  content: string;
}

interface ReviewCreationAttributes extends Optional<ReviewAttributes, "id"> { }

class Review
  extends Model<ReviewAttributes, ReviewCreationAttributes>
  implements ReviewAttributes {
  public id!: string;
  public userId!: string;
  public bookId!: string;
  public content!: string;

}

Review.init(
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
        key: "id",
      },
    },
    bookId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Book,
        key: "id",
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "reviews",
    timestamps: false,
  }
);

export { Review };
