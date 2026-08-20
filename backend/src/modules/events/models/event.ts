import { text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { admins } from "../../admins/models/admin";
import { media } from "../../media/models/media";

export const EVENT_STATUSES = ["draft", "published", "archived"] as const;

export const events = pgTable("events", {
      id: uuid("id").defaultRandom().primaryKey(),
      title: varchar("title", { length: 255 }).notNull(),
      slug: varchar("slug", { length: 255 }).notNull().unique(),
      shortDescription: text("short_description"),
      description: text("description"),
      coverMediaId: uuid("cover_media_id").references(() => media.id),
      location: varchar("location", { length: 255 }),
      registrationUrl: varchar("registration_url", { length: 2048 }),
      startAt: timestamp("start_at").notNull(),
      endAt: timestamp("end_at").notNull(),
      status: varchar("status", {
            length: 50,
            enum: EVENT_STATUSES,
      })
            .default("draft")
            .notNull(),
      publishedAt: timestamp("published_at"),
      createdBy: uuid("created_by")
            .notNull()
            .references(() => admins.id),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type EventStatus = (typeof EVENT_STATUSES)[number];
