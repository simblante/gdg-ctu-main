"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
/*
  Central application logger.

  Purpose:
  - Standardize logging format across services.
  - Enable debugging in production using structured logs.
  - Separate error logs from general application logs.
  - Support future integration with log aggregation tools.

  Design decisions:
  - JSON format for machine parsing.
  - File transport for persistence.
  - Console transport for local development.
*/
// Ensure logs directory exists
const logDir = "logs";
if (!fs_1.default.existsSync(logDir)) {
    fs_1.default.mkdirSync(logDir);
}
const logFormat = winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.errors({ stack: true }), winston_1.default.format.json());
const consoleFormat = winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.timestamp(), winston_1.default.format.printf(({ level, message, timestamp, stack, ...meta }) => {
    const metaString = Object.keys(meta).length
        ? JSON.stringify(meta)
        : "";
    return `${timestamp} [${level}]: ${stack || message} ${metaString}`;
}));
const logger = winston_1.default.createLogger({
    level: process.env.LOG_LEVEL || "info",
    transports: [
        // Application logs
        new winston_1.default.transports.File({
            filename: path_1.default.join(logDir, "app.log"),
        }),
        // Error logs only
        new winston_1.default.transports.File({
            filename: path_1.default.join(logDir, "error.log"),
            level: "error",
        }),
        // Console output for development
        new winston_1.default.transports.Console({
            format: consoleFormat,
        }),
    ],
    exitOnError: false,
});
exports.default = logger;
