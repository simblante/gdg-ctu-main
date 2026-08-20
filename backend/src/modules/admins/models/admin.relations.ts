import { relations } from "drizzle-orm";
import { events } from "../../events/models/event";
import { media } from "../../media/models/media";
import { siteContent } from "../../site-content/models/site-content";
import { admins } from "./admin";

export const adminsRelations = relations(admins, ({ many }) => ({
      events: many(events),
      media: many(media),
      siteContent: many(siteContent),
}));
