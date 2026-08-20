import express, { Express } from "express";
import path from "path";
import cors from "cors";
import logger from "./logger";

// Check port validity
export function validateServerPort(port: string | undefined): number {
      if (!port) {
            logger.info("Error: PORT is not defined in environment variables.");
            process.exit(1);
      }

      const parsedPort = Number(port);

      if (
            Number.isNaN(parsedPort) ||
            parsedPort < 0 ||
            parsedPort > 65535 ||
            !Number.isInteger(parsedPort)
      ) {
            logger.info("Error: PORT is not a valid port number.");
            process.exit(1);
      }

      return parsedPort;
}

// Check Frontend Origin validity
export function validateFrontendOrigin(frOrigin: string | undefined): string {
      if (!frOrigin) {
            logger.info(
                  "Error: FR_ORIGIN is not defined in environment variables.",
            );
            process.exit(1);
      }

      return frOrigin;
}

// Check if server is in production mode
export function validateProductionMode(mode: string | undefined): boolean {
      if (!mode) {
            logger.info(
                  "Error: NODE_ENV is not defined in environment variables.",
            );
            process.exit(1);
      }

      return mode === "production";
}

// Configure CORS based on frontend origin and production mode
export function configureCors(
      app: Express,
      frontendOrigin: string,
      isProduction: boolean,
) {
      app.use(
            cors({
                  origin: frontendOrigin,
                  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
                  credentials: true,
            }),
      );

      return logger.info(
            `CORS: ${frontendOrigin} Running in ${isProduction ? "Production" : "Development"} Mode`,
      );
}

// Configure environment routes based on production mode
export function configureEnvironmentRoutes(
      app: Express,
      isProduction: boolean,
) {
      if (isProduction) {
            const frontendPath = path.join(__dirname, "../../frontend");
            app.use(express.static(frontendPath));

            app.get(/.*/, (req, res) => {
                  if (!req.url.startsWith("/api")) {
                        res.sendFile(path.join(frontendPath, "index.html"));
                  } else {
                        res.status(404).json({
                              message: "API endpoint not found",
                        });
                  }
            });
            return;
      }

      logger.info("App running in Development mode");
      app.get("/", (_req, res) => {
            res.send("API running successfully...");
      });
}
