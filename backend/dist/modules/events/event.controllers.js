"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEvent = exports.updateEvent = exports.getEventBySlug = exports.getEvent = exports.listEvents = exports.createEvent = void 0;
const http_1 = require("../../utils/http");
const event_services_1 = require("./event.services");
const event_validations_1 = require("./event.validations");
const createEvent = async (req, res) => {
    try {
        const data = (0, http_1.validateBody)(event_validations_1.CreateEventSchema, req.body);
        const event = await (0, event_services_1.createEventService)(data);
        return res.status(201).json({
            success: true,
            message: "Event created successfully",
            event,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to create event");
    }
};
exports.createEvent = createEvent;
const listEvents = async (req, res) => {
    try {
        const paginationQuery = (0, http_1.getPagination)(req.query);
        const { events, pagination } = await (0, event_services_1.getEventsService)(paginationQuery);
        return res.status(200).json({
            success: true,
            events,
            pagination,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to list events");
    }
};
exports.listEvents = listEvents;
const getEvent = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        const event = await (0, event_services_1.getEventByIdService)(id);
        return res.status(200).json({
            success: true,
            event,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to get event");
    }
};
exports.getEvent = getEvent;
const getEventBySlug = async (req, res) => {
    try {
        const slug = (0, http_1.getStringParam)(req.params.slug, "slug");
        const event = await (0, event_services_1.getEventBySlugService)(slug);
        return res.status(200).json({
            success: true,
            event,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to get event");
    }
};
exports.getEventBySlug = getEventBySlug;
const updateEvent = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        const data = (0, http_1.validateBody)(event_validations_1.UpdateEventSchema, req.body);
        const event = await (0, event_services_1.updateEventService)(id, data);
        return res.status(200).json({
            success: true,
            message: "Event updated successfully",
            event,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to update event");
    }
};
exports.updateEvent = updateEvent;
const removeEvent = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        await (0, event_services_1.deleteEventService)(id);
        return res.status(200).json({
            success: true,
            message: "Event deleted successfully",
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to delete event");
    }
};
exports.removeEvent = removeEvent;
