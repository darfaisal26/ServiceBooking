import { Sequelize } from "sequelize-typescript";
import config from "../config";
import path from "path";

// const sequelize = new Sequelize({
//   database: "servicebookingtest",
//   username: "root",
//   password: "admin",
//   host: "127.0.0.1",
//   dialect: "mysql",
//   models: [__dirname + "/models"],
// });

const sequelize = new Sequelize({
  database: config.database.name,
  username: config.database.user,
  password: config.database.password,
  host: config.database.host,
  port: config.database.port,
  dialect: "mysql",
  models: [path.join(__dirname, "models")], // Auto-load models
  logging: config.env === "development" ? console.log : false,
});

export default sequelize;
