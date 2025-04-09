import express from "express";
import sequelize from "./database/connection";
import logger from "./utils/logger";
import config from "./config";

const startServer = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Database authenticated successfully");

    const app = express();

    // Add pre-route middleware
    app.use(express.json());

    // Add routes
    // app.use("/api", require("./app/routes"));

    // Add error handling middleware
    // app.use(require("./app/middlewares/error.middleware"));

    app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port}`);
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
