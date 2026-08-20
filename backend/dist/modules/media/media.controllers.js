"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeMedia = exports.updateMedia = exports.getMedia = exports.listMedia = exports.createMedia = void 0;
const http_1 = require("../../utils/http");
const media_services_1 = require("./media.services");
const media_validations_1 = require("./media.validations");
const createMedia = async (req, res) => {
    try {
        const data = (0, http_1.validateBody)(media_validations_1.CreateMediaSchema, req.body);
        const media = await (0, media_services_1.createMediaService)(data);
        return res.status(201).json({
            success: true,
            message: "Media created successfully",
            media,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to create media");
    }
};
exports.createMedia = createMedia;
const listMedia = async (req, res) => {
    try {
        const paginationQuery = (0, http_1.getPagination)(req.query);
        const { media, pagination } = await (0, media_services_1.getMediaService)(paginationQuery);
        return res.status(200).json({
            success: true,
            media,
            pagination,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to list media");
    }
};
exports.listMedia = listMedia;
const getMedia = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        const media = await (0, media_services_1.getMediaByIdService)(id);
        return res.status(200).json({
            success: true,
            media,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to get media");
    }
};
exports.getMedia = getMedia;
const updateMedia = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        const data = (0, http_1.validateBody)(media_validations_1.UpdateMediaSchema, req.body);
        const media = await (0, media_services_1.updateMediaService)(id, data);
        return res.status(200).json({
            success: true,
            message: "Media updated successfully",
            media,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to update media");
    }
};
exports.updateMedia = updateMedia;
const removeMedia = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        await (0, media_services_1.deleteMediaService)(id);
        return res.status(200).json({
            success: true,
            message: "Media deleted successfully",
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to delete media");
    }
};
exports.removeMedia = removeMedia;
