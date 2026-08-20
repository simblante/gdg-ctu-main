"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaRelations = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const admin_1 = require("../../admins/models/admin");
const event_speaker_1 = require("../../event-speakers/models/event-speaker");
const event_1 = require("../../events/models/event");
const site_content_1 = require("../../site-content/models/site-content");
const team_member_1 = require("../../team-members/models/team-member");
const media_1 = require("./media");
exports.mediaRelations = (0, drizzle_orm_1.relations)(media_1.media, ({ one, many }) => ({
    uploader: one(admin_1.admins, {
        fields: [media_1.media.uploadedBy],
        references: [admin_1.admins.id],
    }),
    teamMembers: many(team_member_1.teamMembers),
    eventSpeakers: many(event_speaker_1.eventSpeakers),
    events: many(event_1.events),
    siteContent: many(site_content_1.siteContent),
}));
