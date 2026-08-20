"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamMembers = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const pg_core_2 = require("drizzle-orm/pg-core");
const media_1 = require("../../media/models/media");
exports.teamMembers = (0, pg_core_2.pgTable)("team_members", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    firstName: (0, pg_core_1.varchar)("first_name", { length: 100 }).notNull(),
    lastName: (0, pg_core_1.varchar)("last_name", { length: 100 }).notNull(),
    slug: (0, pg_core_1.varchar)("slug", { length: 255 }).notNull().unique(),
    role: (0, pg_core_1.varchar)("role", { length: 255 }).notNull(),
    bio: (0, pg_core_1.text)("bio"),
    profileMediaId: (0, pg_core_1.uuid)("profile_media_id").references(() => media_1.media.id),
    linkedinUrl: (0, pg_core_1.varchar)("linkedin_url", { length: 2048 }),
    githubUrl: (0, pg_core_1.varchar)("github_url", { length: 2048 }),
    websiteUrl: (0, pg_core_1.varchar)("website_url", { length: 2048 }),
    displayOrder: (0, pg_core_1.integer)("display_order").default(0).notNull(),
    isActive: (0, pg_core_1.boolean)("is_active").default(true).notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
});
