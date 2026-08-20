"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEventSpeakerService = exports.updateEventSpeakerService = exports.getEventSpeakersByTeamMemberIdService = exports.getEventSpeakerBySlugService = exports.getEventSpeakerByIdService = exports.getEventSpeakersService = exports.createEventSpeakerService = void 0;
const http_1 = require("../../utils/http");
const pagination_1 = require("../../utils/pagination");
const media_queries_1 = require("../media/models/media.queries");
const team_member_queries_1 = require("../team-members/models/team-member.queries");
const event_speaker_queries_1 = require("./models/event-speaker.queries");
const validateEventSpeakerReferences = async (data) => {
    if (data.profileMediaId && !(await (0, media_queries_1.getMediaById)(data.profileMediaId))) {
        throw new http_1.AppError(400, "profileMediaId must reference existing media");
    }
    if (data.teamMemberId && !(await (0, team_member_queries_1.getTeamMemberById)(data.teamMemberId))) {
        throw new http_1.AppError(400, "teamMemberId must reference an existing team member");
    }
};
const createEventSpeakerService = async (data) => {
    if (await (0, event_speaker_queries_1.getEventSpeakerBySlug)(data.slug)) {
        throw new http_1.AppError(409, "Event speaker slug already exists");
    }
    await validateEventSpeakerReferences(data);
    return (0, event_speaker_queries_1.insertEventSpeaker)(data);
};
exports.createEventSpeakerService = createEventSpeakerService;
const getEventSpeakersService = async (pagination) => {
    const [eventSpeakers, total] = await Promise.all([
        (0, event_speaker_queries_1.getEventSpeakers)(pagination),
        (0, event_speaker_queries_1.countEventSpeakers)(),
    ]);
    return {
        eventSpeakers,
        pagination: (0, pagination_1.getPaginationMeta)(pagination, total),
    };
};
exports.getEventSpeakersService = getEventSpeakersService;
const getEventSpeakerByIdService = async (id) => {
    const eventSpeaker = await (0, event_speaker_queries_1.getEventSpeakerById)(id);
    if (!eventSpeaker) {
        throw new http_1.AppError(404, "Event speaker not found");
    }
    return eventSpeaker;
};
exports.getEventSpeakerByIdService = getEventSpeakerByIdService;
const getEventSpeakerBySlugService = async (slug) => {
    const eventSpeaker = await (0, event_speaker_queries_1.getEventSpeakerBySlug)(slug);
    if (!eventSpeaker) {
        throw new http_1.AppError(404, "Event speaker not found");
    }
    return eventSpeaker;
};
exports.getEventSpeakerBySlugService = getEventSpeakerBySlugService;
const getEventSpeakersByTeamMemberIdService = async (teamMemberId, pagination) => {
    if (!(await (0, team_member_queries_1.getTeamMemberById)(teamMemberId))) {
        throw new http_1.AppError(404, "Team member not found");
    }
    const [eventSpeakers, total] = await Promise.all([
        (0, event_speaker_queries_1.getEventSpeakersByTeamMemberId)(teamMemberId, pagination),
        (0, event_speaker_queries_1.countEventSpeakersByTeamMemberId)(teamMemberId),
    ]);
    return {
        eventSpeakers,
        pagination: (0, pagination_1.getPaginationMeta)(pagination, total),
    };
};
exports.getEventSpeakersByTeamMemberIdService = getEventSpeakersByTeamMemberIdService;
const updateEventSpeakerService = async (id, data) => {
    const eventSpeaker = await (0, event_speaker_queries_1.getEventSpeakerById)(id);
    if (!eventSpeaker) {
        throw new http_1.AppError(404, "Event speaker not found");
    }
    if (data.slug && data.slug !== eventSpeaker.slug) {
        const existingEventSpeaker = await (0, event_speaker_queries_1.getEventSpeakerBySlug)(data.slug);
        if (existingEventSpeaker) {
            throw new http_1.AppError(409, "Event speaker slug already exists");
        }
    }
    await validateEventSpeakerReferences(data);
    return (0, event_speaker_queries_1.updateEventSpeaker)(id, {
        ...data,
        updatedAt: new Date(),
    });
};
exports.updateEventSpeakerService = updateEventSpeakerService;
const deleteEventSpeakerService = async (id) => {
    const eventSpeaker = await (0, event_speaker_queries_1.getEventSpeakerById)(id);
    if (!eventSpeaker) {
        throw new http_1.AppError(404, "Event speaker not found");
    }
    await (0, event_speaker_queries_1.deleteEventSpeaker)(id);
};
exports.deleteEventSpeakerService = deleteEventSpeakerService;
