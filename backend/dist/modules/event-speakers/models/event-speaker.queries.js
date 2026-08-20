"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEventSpeaker = exports.updateEventSpeaker = exports.countEventSpeakersByTeamMemberId = exports.getEventSpeakersByTeamMemberId = exports.getEventSpeakerBySlug = exports.getEventSpeakerById = exports.countEventSpeakers = exports.getEventSpeakers = exports.insertEventSpeaker = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const connectDB_1 = require("../../../config/connectDB");
const team_member_1 = require("../../team-members/models/team-member");
const event_speaker_1 = require("./event-speaker");
const insertEventSpeaker = async (data) => {
    const [speaker] = await connectDB_1.db
        .insert(event_speaker_1.eventSpeakers)
        .values(data)
        .returning();
    return speaker;
};
exports.insertEventSpeaker = insertEventSpeaker;
const getEventSpeakers = async (pagination) => connectDB_1.db
    .select()
    .from(event_speaker_1.eventSpeakers)
    .orderBy((0, drizzle_orm_1.asc)(event_speaker_1.eventSpeakers.lastName), (0, drizzle_orm_1.asc)(event_speaker_1.eventSpeakers.firstName))
    .limit(pagination.limit)
    .offset(pagination.offset);
exports.getEventSpeakers = getEventSpeakers;
const countEventSpeakers = async () => {
    const [result] = await connectDB_1.db
        .select({ total: (0, drizzle_orm_1.count)() })
        .from(event_speaker_1.eventSpeakers);
    return result.total;
};
exports.countEventSpeakers = countEventSpeakers;
const getEventSpeakerById = async (id) => {
    const [speaker] = await connectDB_1.db
        .select()
        .from(event_speaker_1.eventSpeakers)
        .where((0, drizzle_orm_1.eq)(event_speaker_1.eventSpeakers.id, id));
    return speaker;
};
exports.getEventSpeakerById = getEventSpeakerById;
const getEventSpeakerBySlug = async (slug) => {
    const [speaker] = await connectDB_1.db
        .select()
        .from(event_speaker_1.eventSpeakers)
        .where((0, drizzle_orm_1.eq)(event_speaker_1.eventSpeakers.slug, slug));
    return speaker;
};
exports.getEventSpeakerBySlug = getEventSpeakerBySlug;
const getEventSpeakersByTeamMemberId = async (teamMemberId, pagination) => connectDB_1.db
    .select({
    eventSpeaker: event_speaker_1.eventSpeakers,
    teamMember: team_member_1.teamMembers,
})
    .from(event_speaker_1.eventSpeakers)
    .innerJoin(team_member_1.teamMembers, (0, drizzle_orm_1.eq)(team_member_1.teamMembers.id, event_speaker_1.eventSpeakers.teamMemberId))
    .where((0, drizzle_orm_1.eq)(event_speaker_1.eventSpeakers.teamMemberId, teamMemberId))
    .orderBy((0, drizzle_orm_1.asc)(event_speaker_1.eventSpeakers.lastName), (0, drizzle_orm_1.asc)(event_speaker_1.eventSpeakers.firstName))
    .limit(pagination.limit)
    .offset(pagination.offset);
exports.getEventSpeakersByTeamMemberId = getEventSpeakersByTeamMemberId;
const countEventSpeakersByTeamMemberId = async (teamMemberId) => {
    const [result] = await connectDB_1.db
        .select({ total: (0, drizzle_orm_1.count)() })
        .from(event_speaker_1.eventSpeakers)
        .where((0, drizzle_orm_1.eq)(event_speaker_1.eventSpeakers.teamMemberId, teamMemberId));
    return result.total;
};
exports.countEventSpeakersByTeamMemberId = countEventSpeakersByTeamMemberId;
const updateEventSpeaker = async (id, data) => {
    const [speaker] = await connectDB_1.db
        .update(event_speaker_1.eventSpeakers)
        .set(data)
        .where((0, drizzle_orm_1.eq)(event_speaker_1.eventSpeakers.id, id))
        .returning();
    return speaker;
};
exports.updateEventSpeaker = updateEventSpeaker;
const deleteEventSpeaker = async (id) => {
    const [speaker] = await connectDB_1.db
        .delete(event_speaker_1.eventSpeakers)
        .where((0, drizzle_orm_1.eq)(event_speaker_1.eventSpeakers.id, id))
        .returning();
    return speaker;
};
exports.deleteEventSpeaker = deleteEventSpeaker;
