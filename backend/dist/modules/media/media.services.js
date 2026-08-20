"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMediaService = exports.updateMediaService = exports.getMediaByIdService = exports.getMediaService = exports.createMediaService = void 0;
const http_1 = require("../../utils/http");
const pagination_1 = require("../../utils/pagination");
const admin_queries_1 = require("../admins/models/admin.queries");
const media_queries_1 = require("./models/media.queries");
const createMediaService = async (data) => {
    if (!(await (0, admin_queries_1.getAdminById)(data.uploadedBy))) {
        throw new http_1.AppError(400, "uploadedBy must reference an existing admin");
    }
    if (await (0, media_queries_1.getMediaByStorageKey)(data.storageKey)) {
        throw new http_1.AppError(409, "Media storageKey already exists");
    }
    return (0, media_queries_1.insertMedia)(data);
};
exports.createMediaService = createMediaService;
const getMediaService = async (pagination) => {
    const [media, total] = await Promise.all([
        (0, media_queries_1.getMedia)(pagination),
        (0, media_queries_1.countMedia)(),
    ]);
    return {
        media,
        pagination: (0, pagination_1.getPaginationMeta)(pagination, total),
    };
};
exports.getMediaService = getMediaService;
const getMediaByIdService = async (id) => {
    const media = await (0, media_queries_1.getMediaById)(id);
    if (!media) {
        throw new http_1.AppError(404, "Media not found");
    }
    return media;
};
exports.getMediaByIdService = getMediaByIdService;
const updateMediaService = async (id, data) => {
    const media = await (0, media_queries_1.getMediaById)(id);
    if (!media) {
        throw new http_1.AppError(404, "Media not found");
    }
    if (data.uploadedBy && !(await (0, admin_queries_1.getAdminById)(data.uploadedBy))) {
        throw new http_1.AppError(400, "uploadedBy must reference an existing admin");
    }
    if (data.storageKey && data.storageKey !== media.storageKey) {
        const existingMedia = await (0, media_queries_1.getMediaByStorageKey)(data.storageKey);
        if (existingMedia) {
            throw new http_1.AppError(409, "Media storageKey already exists");
        }
    }
    return (0, media_queries_1.updateMedia)(id, data);
};
exports.updateMediaService = updateMediaService;
const deleteMediaService = async (id) => {
    const media = await (0, media_queries_1.getMediaById)(id);
    if (!media) {
        throw new http_1.AppError(404, "Media not found");
    }
    if (await (0, media_queries_1.mediaHasReferences)(id)) {
        throw new http_1.AppError(409, "Media cannot be deleted while referenced by team members, event speakers, events, or site content");
    }
    await (0, media_queries_1.deleteMedia)(id);
};
exports.deleteMediaService = deleteMediaService;
