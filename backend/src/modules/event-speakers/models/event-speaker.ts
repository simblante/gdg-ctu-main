import { integer, primaryKey, uuid, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { events } from "../../events/models/event";
import { teamMembers } from "../../team-members/models/team-member";

export const eventSpeakers = pgTable(
      "event_speakers",
      {
            eventId: uuid("event_id")
                  .notNull()
                  .references(() => events.id),
            teamMemberId: uuid("team_member_id")
                  .notNull()
                  .references(() => teamMembers.id),
            role: varchar("role", { length: 255 }),
            displayOrder: integer("display_order").default(0).notNull(),
      },
      (table) => [primaryKey({ columns: [table.eventId, table.teamMemberId] })],
);
