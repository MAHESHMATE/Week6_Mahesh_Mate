import { Sequelize } from "sequelize";
import credential from "../common/credentials";

const sequelize = new Sequelize({
  username: credential.postgres.USERNAME,
  host: credential.postgres.HOST,
  database: credential.postgres.DATABASE,
  password: credential.postgres.PASSWORD,
  port: credential.postgres.DBPORT,
  dialect: "postgres",
});

sequelize.authenticate().then(() => {
    console.log("Database is connected.");
}).catch((err) => {
    console.error("Unable to connect to the database!!", err);
});

sequelize.sync().then(() => {
    console.log("Models are synchronized.");
}).catch((err) => {
    console.error("Unable to synchronize models!!", err);
});

export default sequelize;





