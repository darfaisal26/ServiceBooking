import express from "express";
import { checkDbConnection } from "./utils/db";
import userRoutes from "./routes/user.routes";

const app = express();

checkDbConnection().then((connected) => {
  if (!connected) {
    console.error("Database connection failed");
    process.exit(1);
  }

  app.use(express.json());
  app.use("/api", userRoutes);

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
