"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./config/env"));
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./utils/logger"));
const connectDB_1 = require("./config/connectDB");
const modules_1 = __importDefault(require("./modules"));
const serverValidation_1 = require("./utils/serverValidation");
const app = (0, express_1.default)();
const PORT = (0, serverValidation_1.validateServerPort)(env_1.default.PORT);
const FR_ORIGIN = (0, serverValidation_1.validateFrontendOrigin)(env_1.default.FR_ORIGIN);
const isProduction = (0, serverValidation_1.validateProductionMode)(env_1.default.NODE_ENV);
// --- MIDDLEWARE ---
app.use(express_1.default.json());
(0, serverValidation_1.configureCors)(app, FR_ORIGIN, isProduction);
// ROUTES SECTION
app.use("/GDGoC-CTU-Main/v0.0.1", modules_1.default);
(0, serverValidation_1.configureEnvironmentRoutes)(app, isProduction);
(0, connectDB_1.connectDB)()
    .then(() => {
    app.listen(PORT, () => {
        logger_1.default.info(`Server is running on port ${PORT}`);
    });
})
    .catch((err) => {
    logger_1.default.error("Failed to connect to the database:", {
        message: err.message,
        stack: err.stack,
    });
    process.exit(1);
});
