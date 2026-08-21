import { integer, uuid, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { events } from "../../events/models/event";
import { teamMembers } from "../../team-members/models/team-member";

export const eventHosts = pgTable("event_hosts", {
      id: uuid("id").defaultRandom().primaryKey(),
      eventId: uuid("event_id").notNull().references(() => events.id),
      teamMemberId: uuid("team_member_id").notNull().references(() => teamMembers.id),
      hostRole: varchar("host_role", { length: 255 }).notNull(),
      displayOrder: integer("display_order").default(0).notNull(),
});
