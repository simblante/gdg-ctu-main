import { relations } from "drizzle-orm";
import { events } from "../../events/models/event";
import { teamMembers } from "../../team-members/models/team-member";
import { eventSpeakers } from "./event-speaker";

export const eventSpeakersRelations = relations(eventSpeakers, ({ one }) => ({
      event: one(events, {
            fields: [eventSpeakers.eventId],
            references: [events.id],
      }),
      teamMember: one(teamMembers, {
            fields: [eventSpeakers.teamMemberId],
            references: [teamMembers.id],
      }),
}));
