import { relations } from "drizzle-orm";
import { admins } from "../../admins/models/admin";
import { eventSpeakers } from "../../event-speakers/models/event-speaker";
import { media } from "../../media/models/media";
import { events } from "./event";

export const eventsRelations = relations(events, ({ one, many }) => ({
      creator: one(admins, {
            fields: [events.createdBy],
            references: [admins.id],
      }),
      coverMedia: one(media, {
            fields: [events.coverMediaId],
            references: [media.id],
      }),
      speakers: many(eventSpeakers),
}));
