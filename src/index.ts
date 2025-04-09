import express from "express";
import sequelize from "./database/connection";
import logger from "./utils/logger";
import config from "./config";
import mainRouter from "./app/routes";

const startServer = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Database authenticated successfully");

    const app = express();

    app.use(express.json());

    app.use("/api", mainRouter);

    app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port}`);
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
