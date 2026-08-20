"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamMembersRelations = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const event_speaker_1 = require("../../event-speakers/models/event-speaker");
const media_1 = require("../../media/models/media");
const team_member_1 = require("./team-member");
exports.teamMembersRelations = (0, drizzle_orm_1.relations)(team_member_1.teamMembers, ({ one, many }) => ({
    profileMedia: one(media_1.media, {
        fields: [team_member_1.teamMembers.profileMediaId],
        references: [media_1.media.id],
    }),
    eventSpeakers: many(event_speaker_1.eventSpeakers),
}));
