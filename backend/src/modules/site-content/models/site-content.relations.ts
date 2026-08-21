import { relations } from "drizzle-orm";
import { admins } from "../../admins/models/admin";
import { media } from "../../media/models/media";
import { siteContent } from "./site-content";

export const siteContentRelations = relations(siteContent, ({ one }) => ({
      media: one(media, {
            fields: [siteContent.mediaId],
            references: [media.id],
      }),
      updater: one(admins, {
            fields: [siteContent.updatedBy],
            references: [admins.id],
      }),
}));
