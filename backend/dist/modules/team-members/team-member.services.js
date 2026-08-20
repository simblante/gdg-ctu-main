"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeamMemberService = exports.updateTeamMemberService = exports.getTeamMemberBySlugService = exports.getTeamMemberByIdService = exports.getTeamMembersService = exports.createTeamMemberService = void 0;
const http_1 = require("../../utils/http");
const pagination_1 = require("../../utils/pagination");
const media_queries_1 = require("../media/models/media.queries");
const team_member_queries_1 = require("./models/team-member.queries");
const createTeamMemberService = async (data) => {
    if (await (0, team_member_queries_1.getTeamMemberBySlug)(data.slug)) {
        throw new http_1.AppError(409, "Team member slug already exists");
    }
    if (data.profileMediaId && !(await (0, media_queries_1.getMediaById)(data.profileMediaId))) {
        throw new http_1.AppError(400, "profileMediaId must reference existing media");
    }
    return (0, team_member_queries_1.insertTeamMember)(data);
};
exports.createTeamMemberService = createTeamMemberService;
const getTeamMembersService = async (pagination) => {
    const [teamMembers, total] = await Promise.all([
        (0, team_member_queries_1.getTeamMembers)(pagination),
        (0, team_member_queries_1.countTeamMembers)(),
    ]);
    return {
        teamMembers,
        pagination: (0, pagination_1.getPaginationMeta)(pagination, total),
    };
};
exports.getTeamMembersService = getTeamMembersService;
const getTeamMemberByIdService = async (id) => {
    const teamMember = await (0, team_member_queries_1.getTeamMemberById)(id);
    if (!teamMember) {
        throw new http_1.AppError(404, "Team member not found");
    }
    return teamMember;
};
exports.getTeamMemberByIdService = getTeamMemberByIdService;
const getTeamMemberBySlugService = async (slug) => {
    const teamMember = await (0, team_member_queries_1.getTeamMemberBySlug)(slug);
    if (!teamMember) {
        throw new http_1.AppError(404, "Team member not found");
    }
    return teamMember;
};
exports.getTeamMemberBySlugService = getTeamMemberBySlugService;
const updateTeamMemberService = async (id, data) => {
    const teamMember = await (0, team_member_queries_1.getTeamMemberById)(id);
    if (!teamMember) {
        throw new http_1.AppError(404, "Team member not found");
    }
    if (data.slug && data.slug !== teamMember.slug) {
        const existingTeamMember = await (0, team_member_queries_1.getTeamMemberBySlug)(data.slug);
        if (existingTeamMember) {
            throw new http_1.AppError(409, "Team member slug already exists");
        }
    }
    if (data.profileMediaId && !(await (0, media_queries_1.getMediaById)(data.profileMediaId))) {
        throw new http_1.AppError(400, "profileMediaId must reference existing media");
    }
    return (0, team_member_queries_1.updateTeamMember)(id, {
        ...data,
        updatedAt: new Date(),
    });
};
exports.updateTeamMemberService = updateTeamMemberService;
const deleteTeamMemberService = async (id) => {
    const teamMember = await (0, team_member_queries_1.getTeamMemberById)(id);
    if (!teamMember) {
        throw new http_1.AppError(404, "Team member not found");
    }
    if (await (0, team_member_queries_1.teamMemberHasEventSpeakerReferences)(id)) {
        throw new http_1.AppError(409, "Team member cannot be deleted while assigned to events");
    }
    await (0, team_member_queries_1.deleteTeamMember)(id);
};
exports.deleteTeamMemberService = deleteTeamMemberService;
