import { bigint, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { admins } from "../../admins/models/admin";

export const media = pgTable("media", {
      id: uuid("id").defaultRandom().primaryKey(),
      uploadedBy: uuid("uploaded_by")
            .notNull()
            .references(() => admins.id),
      filename: varchar("filename", { length: 255 }).notNull(),
      storageKey: varchar("storage_key", { length: 255 }).notNull().unique(),
      url: varchar("url", { length: 2048 }).notNull(),
      mimeType: varchar("mime_type", { length: 100 }).notNull(),
      fileSize: bigint("file_size", { mode: "number" }).notNull(),
      altText: varchar("alt_text", { length: 255 }),
      createdAt: timestamp("created_at").defaultNow().notNull(),
});
