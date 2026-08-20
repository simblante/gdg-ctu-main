import ENV from "./config/env";
import express from "express";
import logger from "./utils/logger";
import { connectDB } from "./config/connectDB";
import apiRoutes from "./modules";
import {
      validateServerPort,
      validateFrontendOrigin,
      validateProductionMode,
      configureCors,
      configureEnvironmentRoutes,
} from "./utils/serverValidation";

const app = express();
const PORT = validateServerPort(ENV.PORT);
const FR_ORIGIN = validateFrontendOrigin(ENV.FR_ORIGIN);
const isProduction = validateProductionMode(ENV.NODE_ENV);

// --- MIDDLEWARE ---
app.use(express.json());
configureCors(app, FR_ORIGIN, isProduction);

// ROUTES SECTION
app.use("/GDGoC-CTU-Main/v0.0.1", apiRoutes);
configureEnvironmentRoutes(app, isProduction);

connectDB()
      .then(() => {
            app.listen(PORT, () => {
                  logger.info(`Server is running on port ${PORT}`);
            });
      })
      .catch((err) => {
            logger.error("Failed to connect to the database:", {
                  message: err.message,
                  stack: err.stack,
            });
            process.exit(1);
      });
