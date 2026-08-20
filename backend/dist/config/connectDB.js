"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.db = exports.pool = void 0;
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const env_1 = __importDefault(require("./env"));
const logger_1 = __importDefault(require("../utils/logger"));
// import * as schema from "../modules";
exports.pool = new pg_1.Pool({
    connectionString: env_1.default.DB_URL,
});
exports.db = (0, node_postgres_1.drizzle)({
    client: exports.pool,
    // schema,
});
const connectDB = async () => {
    await exports.pool.query("SELECT 1");
    return logger_1.default.info("Server Connected to Database Successfully");
};
exports.connectDB = connectDB;
