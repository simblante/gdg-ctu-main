"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventSpeakersRelations = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const media_1 = require("../../media/models/media");
const team_member_1 = require("../../team-members/models/team-member");
const event_speaker_1 = require("./event-speaker");
exports.eventSpeakersRelations = (0, drizzle_orm_1.relations)(event_speaker_1.eventSpeakers, ({ one }) => ({
    teamMember: one(team_member_1.teamMembers, {
        fields: [event_speaker_1.eventSpeakers.teamMemberId],
        references: [team_member_1.teamMembers.id],
    }),
    profileMedia: one(media_1.media, {
        fields: [event_speaker_1.eventSpeakers.profileMediaId],
        references: [media_1.media.id],
    }),
}));
