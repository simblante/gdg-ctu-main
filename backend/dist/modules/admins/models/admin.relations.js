"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsRelations = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const event_1 = require("../../events/models/event");
const media_1 = require("../../media/models/media");
const site_content_1 = require("../../site-content/models/site-content");
const admin_1 = require("./admin");
exports.adminsRelations = (0, drizzle_orm_1.relations)(admin_1.admins, ({ many }) => ({
    events: many(event_1.events),
    media: many(media_1.media),
    siteContent: many(site_content_1.siteContent),
}));
