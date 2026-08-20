"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEventService = exports.updateEventService = exports.getEventBySlugService = exports.getEventByIdService = exports.getEventsService = exports.createEventService = void 0;
const http_1 = require("../../utils/http");
const pagination_1 = require("../../utils/pagination");
const admin_queries_1 = require("../admins/models/admin.queries");
const media_queries_1 = require("../media/models/media.queries");
const event_queries_1 = require("./models/event.queries");
const getPublishedAtForStatus = (status, existingPublishedAt) => {
    if (!status) {
        return undefined;
    }
    if (status === "published") {
        return existingPublishedAt ?? new Date();
    }
    return null;
};
const validateEventReferences = async (data) => {
    if (!(await (0, admin_queries_1.getAdminById)(data.createdBy))) {
        throw new http_1.AppError(400, "createdBy must reference an existing admin");
    }
    if (data.coverMediaId && !(await (0, media_queries_1.getMediaById)(data.coverMediaId))) {
        throw new http_1.AppError(400, "coverMediaId must reference existing media");
    }
};
const createEventService = async (data) => {
    if (await (0, event_queries_1.getEventBySlug)(data.slug)) {
        throw new http_1.AppError(409, "Event slug already exists");
    }
    await validateEventReferences(data);
    const eventData = {
        ...data,
        publishedAt: getPublishedAtForStatus(data.status),
    };
    return (0, event_queries_1.insertEvent)(eventData);
};
exports.createEventService = createEventService;
const getEventsService = async (pagination) => {
    const [events, total] = await Promise.all([
        (0, event_queries_1.getEvents)(pagination),
        (0, event_queries_1.countEvents)(),
    ]);
    return {
        events,
        pagination: (0, pagination_1.getPaginationMeta)(pagination, total),
    };
};
exports.getEventsService = getEventsService;
const getEventByIdService = async (id) => {
    const event = await (0, event_queries_1.getEventById)(id);
    if (!event) {
        throw new http_1.AppError(404, "Event not found");
    }
    return event;
};
exports.getEventByIdService = getEventByIdService;
const getEventBySlugService = async (slug) => {
    const event = await (0, event_queries_1.getEventBySlug)(slug);
    if (!event) {
        throw new http_1.AppError(404, "Event not found");
    }
    return event;
};
exports.getEventBySlugService = getEventBySlugService;
const updateEventService = async (id, data) => {
    const event = await (0, event_queries_1.getEventById)(id);
    if (!event) {
        throw new http_1.AppError(404, "Event not found");
    }
    if (data.slug && data.slug !== event.slug) {
        const existingEvent = await (0, event_queries_1.getEventBySlug)(data.slug);
        if (existingEvent) {
            throw new http_1.AppError(409, "Event slug already exists");
        }
    }
    if (data.createdBy && !(await (0, admin_queries_1.getAdminById)(data.createdBy))) {
        throw new http_1.AppError(400, "createdBy must reference an existing admin");
    }
    if (data.coverMediaId && !(await (0, media_queries_1.getMediaById)(data.coverMediaId))) {
        throw new http_1.AppError(400, "coverMediaId must reference existing media");
    }
    const startAt = data.startAt ?? event.startAt;
    const endAt = data.endAt ?? event.endAt;
    if (endAt < startAt) {
        throw new http_1.AppError(400, "endAt must not be earlier than startAt");
    }
    const eventUpdate = {
        ...data,
        updatedAt: new Date(),
    };
    const publishedAt = getPublishedAtForStatus(data.status, event.publishedAt);
    if (publishedAt !== undefined) {
        eventUpdate.publishedAt = publishedAt;
    }
    const updatedEvent = await (0, event_queries_1.updateEvent)(id, eventUpdate);
    return updatedEvent;
};
exports.updateEventService = updateEventService;
const deleteEventService = async (id) => {
    const event = await (0, event_queries_1.getEventById)(id);
    if (!event) {
        throw new http_1.AppError(404, "Event not found");
    }
    await (0, event_queries_1.deleteEvent)(id);
};
exports.deleteEventService = deleteEventService;
