import express from "express";
import sequelize from "./database/connection";
import { User } from "./database/models/User";
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
