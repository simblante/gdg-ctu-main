import { relations } from "drizzle-orm";
import { admins } from "../../admins/models/admin";
import { events } from "../../events/models/event";
import { siteContent } from "../../site-content/models/site-content";
import { teamMembers } from "../../team-members/models/team-member";
import { media } from "./media";

export const mediaRelations = relations(media, ({ one, many }) => ({
      uploader: one(admins, {
            fields: [media.uploadedBy],
            references: [admins.id],
      }),
      teamMembers: many(teamMembers),
      events: many(events),
      siteContent: many(siteContent),
}));
