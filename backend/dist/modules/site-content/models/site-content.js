"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.siteContent = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const pg_core_2 = require("drizzle-orm/pg-core");
const admin_1 = require("../../admins/models/admin");
const media_1 = require("../../media/models/media");
exports.siteContent = (0, pg_core_2.pgTable)("site_content", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    sectionKey: (0, pg_core_1.varchar)("section_key", { length: 255 }).notNull().unique(),
    title: (0, pg_core_1.varchar)("title", { length: 255 }).notNull(),
    subtitle: (0, pg_core_1.text)("subtitle"),
    body: (0, pg_core_1.text)("body"),
    mediaId: (0, pg_core_1.uuid)("media_id").references(() => media_1.media.id),
    buttonText: (0, pg_core_1.varchar)("button_text", { length: 255 }),
    buttonUrl: (0, pg_core_1.varchar)("button_url", { length: 2048 }),
    isActive: (0, pg_core_1.boolean)("is_active").default(true).notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
    updatedBy: (0, pg_core_1.uuid)("updated_by")
        .notNull()
        .references(() => admin_1.admins.id),
});
