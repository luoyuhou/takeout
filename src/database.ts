import "reflect-metadata";
import { createConnection } from "typeorm";
import config from "./config";

const connection = createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB,
  entities: ['src/entities/*.ts', "dist/entities/*.js"],
  synchronize: false,
  logging: false,
});

module.exports = connection; // 执行连接