import {
      boolean,
      integer,
      text,
      timestamp,
      uuid,
      varchar,
} from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { media } from "../../media/models/media";

export const teamMembers = pgTable("team_members", {
      id: uuid("id").defaultRandom().primaryKey(),
      firstName: varchar("first_name", { length: 100 }).notNull(),
      lastName: varchar("last_name", { length: 100 }).notNull(),
      slug: varchar("slug", { length: 255 }).notNull().unique(),
      role: varchar("role", { length: 255 }).notNull(),
      bio: text("bio"),
      profileMediaId: uuid("profile_media_id").references(() => media.id),
      linkedinUrl: varchar("linkedin_url", { length: 2048 }),
      githubUrl: varchar("github_url", { length: 2048 }),
      websiteUrl: varchar("website_url", { length: 2048 }),
      displayOrder: integer("display_order").default(0).notNull(),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
