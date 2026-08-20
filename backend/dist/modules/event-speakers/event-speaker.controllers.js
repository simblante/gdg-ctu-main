"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEventSpeaker = exports.updateEventSpeaker = exports.listEventSpeakersForTeamMember = exports.getEventSpeakerBySlug = exports.getEventSpeaker = exports.listEventSpeakers = exports.createEventSpeaker = void 0;
const http_1 = require("../../utils/http");
const event_speaker_services_1 = require("./event-speaker.services");
const event_speaker_validations_1 = require("./event-speaker.validations");
const createEventSpeaker = async (req, res) => {
    try {
        const data = (0, http_1.validateBody)(event_speaker_validations_1.CreateEventSpeakerSchema, req.body);
        const eventSpeaker = await (0, event_speaker_services_1.createEventSpeakerService)(data);
        return res.status(201).json({
            success: true,
            message: "Event speaker created successfully",
            eventSpeaker,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to create event speaker");
    }
};
exports.createEventSpeaker = createEventSpeaker;
const listEventSpeakers = async (req, res) => {
    try {
        const paginationQuery = (0, http_1.getPagination)(req.query);
        const { eventSpeakers, pagination } = await (0, event_speaker_services_1.getEventSpeakersService)(paginationQuery);
        return res.status(200).json({
            success: true,
            eventSpeakers,
            pagination,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to list event speakers");
    }
};
exports.listEventSpeakers = listEventSpeakers;
const getEventSpeaker = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        const eventSpeaker = await (0, event_speaker_services_1.getEventSpeakerByIdService)(id);
        return res.status(200).json({
            success: true,
            eventSpeaker,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to get event speaker");
    }
};
exports.getEventSpeaker = getEventSpeaker;
const getEventSpeakerBySlug = async (req, res) => {
    try {
        const slug = (0, http_1.getStringParam)(req.params.slug, "slug");
        const eventSpeaker = await (0, event_speaker_services_1.getEventSpeakerBySlugService)(slug);
        return res.status(200).json({
            success: true,
            eventSpeaker,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to get event speaker");
    }
};
exports.getEventSpeakerBySlug = getEventSpeakerBySlug;
const listEventSpeakersForTeamMember = async (req, res) => {
    try {
        const teamMemberId = (0, http_1.validateUuid)(req.params.teamMemberId, "teamMemberId");
        const paginationQuery = (0, http_1.getPagination)(req.query);
        const { eventSpeakers, pagination } = await (0, event_speaker_services_1.getEventSpeakersByTeamMemberIdService)(teamMemberId, paginationQuery);
        return res.status(200).json({
            success: true,
            eventSpeakers,
            pagination,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to list team member event speakers");
    }
};
exports.listEventSpeakersForTeamMember = listEventSpeakersForTeamMember;
const updateEventSpeaker = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        const data = (0, http_1.validateBody)(event_speaker_validations_1.UpdateEventSpeakerSchema, req.body);
        const eventSpeaker = await (0, event_speaker_services_1.updateEventSpeakerService)(id, data);
        return res.status(200).json({
            success: true,
            message: "Event speaker updated successfully",
            eventSpeaker,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to update event speaker");
    }
};
exports.updateEventSpeaker = updateEventSpeaker;
const removeEventSpeaker = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        await (0, event_speaker_services_1.deleteEventSpeakerService)(id);
        return res.status(200).json({
            success: true,
            message: "Event speaker deleted successfully",
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to delete event speaker");
    }
};
exports.removeEventSpeaker = removeEventSpeaker;
