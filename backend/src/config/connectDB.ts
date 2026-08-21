import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import ENV from "./env";
import logger from "../utils/logger";
import * as schema from "../modules";

export const pool = new Pool({
      connectionString: ENV.DB_URL,
});

export const db = drizzle({
      client: pool,
      schema,
});

export const connectDB = async () => {
      await pool.query("SELECT 1");
      return logger.info("Server Connected to Database Successfully");
};
