import { text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { media } from "../../media/models/media";
import { teamMembers } from "../../team-members/models/team-member";
import { events } from "../../events/models/event";

export const eventSpeakers = pgTable("event_speakers", {
      eventId: uuid("event_id").references(() => events.id),
      id: uuid("id").defaultRandom().primaryKey(),
      firstName: varchar("first_name", { length: 100 }).notNull(),
      lastName: varchar("last_name", { length: 100 }).notNull(),
      slug: varchar("slug", { length: 255 }).notNull().unique(),
      role: varchar("role", { length: 255 }),
      bio: text("bio"),
      profileMediaId: uuid("profile_media_id").references(() => media.id),
      linkedinUrl: varchar("linkedin_url", { length: 2048 }),
      githubUrl: varchar("github_url", { length: 2048 }),
      websiteUrl: varchar("website_url", { length: 2048 }),
      teamMemberId: uuid("team_member_id").references(() => teamMembers.id),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
