import { Sequelize } from "sequelize-typescript";
import config from "./config/db";

const sequelize = new Sequelize({
  database: "servicebookingtest",
  username: "root",
  password: "admin",
  host: "127.0.0.1",
  dialect: "mysql",
  models: [__dirname + "/models"],
});

export default sequelize;
