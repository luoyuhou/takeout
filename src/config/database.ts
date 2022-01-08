import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import config from "./config";
import logger from "../logger";

const connection = (): Promise<Connection> => createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB,
  entities: ["src/entities/*.ts", "dist/entities/*.js"],
  synchronize: false,
  logging: false,
});

module.exports = connection()
  .then(() => logger.info("connect db successful!"))
  .catch((e: { message: any; }) => logger.error(`connect db failed. Error: ${e.message}`)); // 执行连接