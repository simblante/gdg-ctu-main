"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateServerPort = validateServerPort;
exports.validateFrontendOrigin = validateFrontendOrigin;
exports.validateProductionMode = validateProductionMode;
exports.configureCors = configureCors;
exports.configureEnvironmentRoutes = configureEnvironmentRoutes;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = __importDefault(require("./logger"));
// Check port validity
function validateServerPort(port) {
    if (!port) {
        logger_1.default.info("Error: PORT is not defined in environment variables.");
        process.exit(1);
    }
    const parsedPort = Number(port);
    if (Number.isNaN(parsedPort) ||
        parsedPort < 0 ||
        parsedPort > 65535 ||
        !Number.isInteger(parsedPort)) {
        logger_1.default.info("Error: PORT is not a valid port number.");
        process.exit(1);
    }
    return parsedPort;
}
// Check Frontend Origin validity
function validateFrontendOrigin(frOrigin) {
    if (!frOrigin) {
        logger_1.default.info("Error: FR_ORIGIN is not defined in environment variables.");
        process.exit(1);
    }
    return frOrigin;
}
// Check if server is in production mode
function validateProductionMode(mode) {
    if (!mode) {
        logger_1.default.info("Error: NODE_ENV is not defined in environment variables.");
        process.exit(1);
    }
    return mode === "production";
}
// Configure CORS based on frontend origin and production mode
function configureCors(app, frontendOrigin, isProduction) {
    app.use((0, cors_1.default)({
        origin: frontendOrigin,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
    }));
    return logger_1.default.info(`CORS: ${frontendOrigin} Running in ${isProduction ? "Production" : "Development"} Mode`);
}
// Configure environment routes based on production mode
function configureEnvironmentRoutes(app, isProduction) {
    if (isProduction) {
        const frontendPath = path_1.default.join(__dirname, "../../frontend");
        app.use(express_1.default.static(frontendPath));
        app.get(/.*/, (req, res) => {
            if (!req.url.startsWith("/api")) {
                res.sendFile(path_1.default.join(frontendPath, "index.html"));
            }
            else {
                res.status(404).json({
                    message: "API endpoint not found",
                });
            }
        });
        return;
    }
    logger_1.default.info("App running in Development mode");
    app.get("/", (_req, res) => {
        res.send("API running successfully...");
    });
}
