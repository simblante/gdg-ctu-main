"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamMemberHasEventSpeakerReferences = exports.deleteTeamMember = exports.updateTeamMember = exports.getTeamMemberBySlug = exports.getTeamMemberById = exports.countTeamMembers = exports.getTeamMembers = exports.insertTeamMember = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const connectDB_1 = require("../../../config/connectDB");
const event_speaker_1 = require("../../event-speakers/models/event-speaker");
const team_member_1 = require("./team-member");
const insertTeamMember = async (data) => {
    const [teamMember] = await connectDB_1.db
        .insert(team_member_1.teamMembers)
        .values(data)
        .returning();
    return teamMember;
};
exports.insertTeamMember = insertTeamMember;
const getTeamMembers = async (pagination) => connectDB_1.db
    .select()
    .from(team_member_1.teamMembers)
    .orderBy((0, drizzle_orm_1.asc)(team_member_1.teamMembers.displayOrder), (0, drizzle_orm_1.asc)(team_member_1.teamMembers.lastName))
    .limit(pagination.limit)
    .offset(pagination.offset);
exports.getTeamMembers = getTeamMembers;
const countTeamMembers = async () => {
    const [result] = await connectDB_1.db.select({ total: (0, drizzle_orm_1.count)() }).from(team_member_1.teamMembers);
    return result.total;
};
exports.countTeamMembers = countTeamMembers;
const getTeamMemberById = async (id) => {
    const [teamMember] = await connectDB_1.db
        .select()
        .from(team_member_1.teamMembers)
        .where((0, drizzle_orm_1.eq)(team_member_1.teamMembers.id, id));
    return teamMember;
};
exports.getTeamMemberById = getTeamMemberById;
const getTeamMemberBySlug = async (slug) => {
    const [teamMember] = await connectDB_1.db
        .select()
        .from(team_member_1.teamMembers)
        .where((0, drizzle_orm_1.eq)(team_member_1.teamMembers.slug, slug));
    return teamMember;
};
exports.getTeamMemberBySlug = getTeamMemberBySlug;
const updateTeamMember = async (id, data) => {
    const [teamMember] = await connectDB_1.db
        .update(team_member_1.teamMembers)
        .set(data)
        .where((0, drizzle_orm_1.eq)(team_member_1.teamMembers.id, id))
        .returning();
    return teamMember;
};
exports.updateTeamMember = updateTeamMember;
const deleteTeamMember = async (id) => {
    const [teamMember] = await connectDB_1.db
        .delete(team_member_1.teamMembers)
        .where((0, drizzle_orm_1.eq)(team_member_1.teamMembers.id, id))
        .returning();
    return teamMember;
};
exports.deleteTeamMember = deleteTeamMember;
const teamMemberHasEventSpeakerReferences = async (id) => {
    const [speaker] = await connectDB_1.db
        .select({ id: event_speaker_1.eventSpeakers.id })
        .from(event_speaker_1.eventSpeakers)
        .where((0, drizzle_orm_1.eq)(event_speaker_1.eventSpeakers.teamMemberId, id))
        .limit(1);
    return Boolean(speaker);
};
exports.teamMemberHasEventSpeakerReferences = teamMemberHasEventSpeakerReferences;
