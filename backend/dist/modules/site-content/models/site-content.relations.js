"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.siteContentRelations = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const admin_1 = require("../../admins/models/admin");
const media_1 = require("../../media/models/media");
const site_content_1 = require("./site-content");
exports.siteContentRelations = (0, drizzle_orm_1.relations)(site_content_1.siteContent, ({ one }) => ({
    media: one(media_1.media, {
        fields: [site_content_1.siteContent.mediaId],
        references: [media_1.media.id],
    }),
    updater: one(admin_1.admins, {
        fields: [site_content_1.siteContent.updatedBy],
        references: [admin_1.admins.id],
    }),
}));
