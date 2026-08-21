import { relations } from "drizzle-orm";
import { events } from "../../events/models/event";
import { eventAttendees } from "./event-attendee";

export const eventAttendeesRelations = relations(eventAttendees, ({ one }) => ({
      event: one(events, {
            fields: [eventAttendees.eventId],
            references: [events.id],
      }),
}));
