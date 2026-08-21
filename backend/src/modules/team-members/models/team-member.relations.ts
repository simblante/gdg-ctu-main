import { relations } from "drizzle-orm";
import { eventSpeakers } from "../../event-speakers/models/event-speaker";
import { media } from "../../media/models/media";
import { teamMembers } from "./team-member";

export const teamMembersRelations = relations(teamMembers, ({ one, many }) => ({
      profileMedia: one(media, {
            fields: [teamMembers.profileMediaId],
            references: [media.id],
      }),
      eventSpeakers: many(eventSpeakers),
}));
