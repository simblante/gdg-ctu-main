"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = exports.EVENT_STATUSES = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const pg_core_2 = require("drizzle-orm/pg-core");
const admin_1 = require("../../admins/models/admin");
const media_1 = require("../../media/models/media");
exports.EVENT_STATUSES = [
    "draft",
    "published",
    "archived",
    "cancelled",
];
exports.events = (0, pg_core_2.pgTable)("events", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    title: (0, pg_core_1.varchar)("title", { length: 255 }).notNull(),
    slug: (0, pg_core_1.varchar)("slug", { length: 255 }).notNull().unique(),
    shortDescription: (0, pg_core_1.text)("short_description"),
    description: (0, pg_core_1.text)("description"),
    coverMediaId: (0, pg_core_1.uuid)("cover_media_id").references(() => media_1.media.id),
    location: (0, pg_core_1.varchar)("location", { length: 255 }),
    registrationUrl: (0, pg_core_1.varchar)("registration_url", { length: 2048 }),
    startAt: (0, pg_core_1.timestamp)("start_at").notNull(),
    endAt: (0, pg_core_1.timestamp)("end_at").notNull(),
    status: (0, pg_core_1.varchar)("status", {
        length: 50,
        enum: exports.EVENT_STATUSES,
    })
        .default("draft")
        .notNull(),
    publishedAt: (0, pg_core_1.timestamp)("published_at"),
    createdBy: (0, pg_core_1.uuid)("created_by")
        .notNull()
        .references(() => admin_1.admins.id),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
});
