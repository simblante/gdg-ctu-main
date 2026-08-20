import { defineConfig } from "drizzle-kit";
import ENV from "./src/config/env";

export default defineConfig({
      schema: "./src/modules/**/models/*.ts",
      dialect: "postgresql",
      dbCredentials: {
            url: ENV.DB_URL!,
      },
});
