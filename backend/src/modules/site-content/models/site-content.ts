import { boolean, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { admins } from "../../admins/models/admin";
import { media } from "../../media/models/media";

export const siteContent = pgTable("site_content", {
      id: uuid("id").defaultRandom().primaryKey(),
      sectionKey: varchar("section_key", { length: 255 }).notNull().unique(),
      title: varchar("title", { length: 255 }).notNull(),
      subtitle: text("subtitle"),
      body: text("body"),
      mediaId: uuid("media_id").references(() => media.id),
      buttonText: varchar("button_text", { length: 255 }),
      buttonUrl: varchar("button_url", { length: 2048 }),
      isActive: boolean("is_active").default(true).notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull(),
      updatedBy: uuid("updated_by")
            .notNull()
            .references(() => admins.id),
});
