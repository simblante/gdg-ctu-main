import { integer, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { events } from "../../events/models/event";

export const eventAttendees = pgTable("event_attendees", {
      id: uuid("id").defaultRandom().primaryKey(),
      eventId: uuid("event_id")
            .notNull()
            .references(() => events.id),
      firstName: varchar("first_name", { length: 100 }).notNull(),
      lastName: varchar("last_name", { length: 100 }).notNull(),
      email: varchar("email", { length: 255 }).notNull(),
      phone: varchar("phone", { length: 50 }),
      organization: varchar("organization", { length: 255 }),
      jobTitle: varchar("job_title", { length: 255 }),
      registrationStatus: varchar("registration_status", {
            length: 100,
      }).notNull(),
      registeredAt: timestamp("registered_at").defaultNow().notNull(),
      attendedAt: timestamp("attended_at"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
