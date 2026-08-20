"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeSiteContent = exports.updateSiteContent = exports.getSiteContentBySectionKey = exports.getSiteContent = exports.listSiteContent = exports.createSiteContent = void 0;
const http_1 = require("../../utils/http");
const site_content_services_1 = require("./site-content.services");
const site_content_validations_1 = require("./site-content.validations");
const createSiteContent = async (req, res) => {
    try {
        const data = (0, http_1.validateBody)(site_content_validations_1.CreateSiteContentSchema, req.body);
        const siteContent = await (0, site_content_services_1.createSiteContentService)(data);
        return res.status(201).json({
            success: true,
            message: "Site content created successfully",
            siteContent,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to create site content");
    }
};
exports.createSiteContent = createSiteContent;
const listSiteContent = async (req, res) => {
    try {
        const paginationQuery = (0, http_1.getPagination)(req.query);
        const { siteContent, pagination } = await (0, site_content_services_1.getSiteContentListService)(paginationQuery);
        return res.status(200).json({
            success: true,
            siteContent,
            pagination,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to list site content");
    }
};
exports.listSiteContent = listSiteContent;
const getSiteContent = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        const siteContent = await (0, site_content_services_1.getSiteContentByIdService)(id);
        return res.status(200).json({
            success: true,
            siteContent,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to get site content");
    }
};
exports.getSiteContent = getSiteContent;
const getSiteContentBySectionKey = async (req, res) => {
    try {
        const sectionKey = (0, http_1.getStringParam)(req.params.sectionKey, "sectionKey");
        const siteContent = await (0, site_content_services_1.getSiteContentBySectionKeyService)(sectionKey);
        return res.status(200).json({
            success: true,
            siteContent,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to get site content");
    }
};
exports.getSiteContentBySectionKey = getSiteContentBySectionKey;
const updateSiteContent = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        const data = (0, http_1.validateBody)(site_content_validations_1.UpdateSiteContentSchema, req.body);
        const siteContent = await (0, site_content_services_1.updateSiteContentService)(id, data);
        return res.status(200).json({
            success: true,
            message: "Site content updated successfully",
            siteContent,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to update site content");
    }
};
exports.updateSiteContent = updateSiteContent;
const removeSiteContent = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        await (0, site_content_services_1.deleteSiteContentService)(id);
        return res.status(200).json({
            success: true,
            message: "Site content deleted successfully",
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to delete site content");
    }
};
exports.removeSiteContent = removeSiteContent;
