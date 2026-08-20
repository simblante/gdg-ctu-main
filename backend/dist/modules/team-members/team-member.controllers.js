"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTeamMember = exports.updateTeamMember = exports.getTeamMemberBySlug = exports.getTeamMember = exports.listTeamMembers = exports.createTeamMember = void 0;
const http_1 = require("../../utils/http");
const team_member_services_1 = require("./team-member.services");
const team_member_validations_1 = require("./team-member.validations");
const createTeamMember = async (req, res) => {
    try {
        const data = (0, http_1.validateBody)(team_member_validations_1.CreateTeamMemberSchema, req.body);
        const teamMember = await (0, team_member_services_1.createTeamMemberService)(data);
        return res.status(201).json({
            success: true,
            message: "Team member created successfully",
            teamMember,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to create team member");
    }
};
exports.createTeamMember = createTeamMember;
const listTeamMembers = async (req, res) => {
    try {
        const paginationQuery = (0, http_1.getPagination)(req.query);
        const { teamMembers, pagination } = await (0, team_member_services_1.getTeamMembersService)(paginationQuery);
        return res.status(200).json({
            success: true,
            teamMembers,
            pagination,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to list team members");
    }
};
exports.listTeamMembers = listTeamMembers;
const getTeamMember = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        const teamMember = await (0, team_member_services_1.getTeamMemberByIdService)(id);
        return res.status(200).json({
            success: true,
            teamMember,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to get team member");
    }
};
exports.getTeamMember = getTeamMember;
const getTeamMemberBySlug = async (req, res) => {
    try {
        const slug = (0, http_1.getStringParam)(req.params.slug, "slug");
        const teamMember = await (0, team_member_services_1.getTeamMemberBySlugService)(slug);
        return res.status(200).json({
            success: true,
            teamMember,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to get team member");
    }
};
exports.getTeamMemberBySlug = getTeamMemberBySlug;
const updateTeamMember = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        const data = (0, http_1.validateBody)(team_member_validations_1.UpdateTeamMemberSchema, req.body);
        const teamMember = await (0, team_member_services_1.updateTeamMemberService)(id, data);
        return res.status(200).json({
            success: true,
            message: "Team member updated successfully",
            teamMember,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to update team member");
    }
};
exports.updateTeamMember = updateTeamMember;
const removeTeamMember = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        await (0, team_member_services_1.deleteTeamMemberService)(id);
        return res.status(200).json({
            success: true,
            message: "Team member deleted successfully",
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to delete team member");
    }
};
exports.removeTeamMember = removeTeamMember;
