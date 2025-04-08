import express from "express";
import sequelize from "./db-connection";
import { User } from "./models/User";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  await sequelize.sync();
  console.log("hello");
})();

const app = express();

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
