"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsRelations = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const admin_1 = require("../../admins/models/admin");
const media_1 = require("../../media/models/media");
const event_1 = require("./event");
exports.eventsRelations = (0, drizzle_orm_1.relations)(event_1.events, ({ one }) => ({
    creator: one(admin_1.admins, {
        fields: [event_1.events.createdBy],
        references: [admin_1.admins.id],
    }),
    coverMedia: one(media_1.media, {
        fields: [event_1.events.coverMediaId],
        references: [media_1.media.id],
    }),
}));
