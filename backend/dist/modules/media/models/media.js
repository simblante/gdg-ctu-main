"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.media = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const pg_core_2 = require("drizzle-orm/pg-core");
const admin_1 = require("../../admins/models/admin");
exports.media = (0, pg_core_2.pgTable)("media", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    uploadedBy: (0, pg_core_1.uuid)("uploaded_by")
        .notNull()
        .references(() => admin_1.admins.id),
    filename: (0, pg_core_1.varchar)("filename", { length: 255 }).notNull(),
    storageKey: (0, pg_core_1.varchar)("storage_key", { length: 255 }).notNull().unique(),
    url: (0, pg_core_1.varchar)("url", { length: 2048 }).notNull(),
    mimeType: (0, pg_core_1.varchar)("mime_type", { length: 100 }).notNull(),
    fileSize: (0, pg_core_1.bigint)("file_size", { mode: "number" }).notNull(),
    altText: (0, pg_core_1.varchar)("alt_text", { length: 255 }),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
});
