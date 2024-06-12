import * as dotenv from "dotenv";
dotenv.config();

const credential = {
  postgres: {
    USERNAME: process.env.USER || "",
    DATABASE: process.env.DATABASE || "",
    HOST: process.env.HOST_NAME || "",
    PASSWORD: process.env.PASSWORD || "",
    DBPORT: Number(process.env.PORTNAME) || 5432,
    ACCESS_TOKEN_SECRET: process.env.JWT_SECRET || "",
    GOCARDLESS_ACCESS_TOKEN: process.env.ACCESSS_TOKEN,
  },
};

export default credential;






