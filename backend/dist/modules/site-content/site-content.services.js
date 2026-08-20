"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSiteContentService = exports.updateSiteContentService = exports.getSiteContentBySectionKeyService = exports.getSiteContentByIdService = exports.getSiteContentListService = exports.createSiteContentService = void 0;
const http_1 = require("../../utils/http");
const pagination_1 = require("../../utils/pagination");
const admin_queries_1 = require("../admins/models/admin.queries");
const media_queries_1 = require("../media/models/media.queries");
const site_content_queries_1 = require("./models/site-content.queries");
const validateSiteContentReferences = async (data) => {
    if (!(await (0, admin_queries_1.getAdminById)(data.updatedBy))) {
        throw new http_1.AppError(400, "updatedBy must reference an existing admin");
    }
    if (data.mediaId && !(await (0, media_queries_1.getMediaById)(data.mediaId))) {
        throw new http_1.AppError(400, "mediaId must reference existing media");
    }
};
const createSiteContentService = async (data) => {
    if (await (0, site_content_queries_1.getSiteContentBySectionKey)(data.sectionKey)) {
        throw new http_1.AppError(409, "Site content sectionKey already exists");
    }
    await validateSiteContentReferences(data);
    return (0, site_content_queries_1.insertSiteContent)({
        ...data,
        updatedAt: new Date(),
    });
};
exports.createSiteContentService = createSiteContentService;
const getSiteContentListService = async (pagination) => {
    const [siteContent, total] = await Promise.all([
        (0, site_content_queries_1.getSiteContentList)(pagination),
        (0, site_content_queries_1.countSiteContent)(),
    ]);
    return {
        siteContent,
        pagination: (0, pagination_1.getPaginationMeta)(pagination, total),
    };
};
exports.getSiteContentListService = getSiteContentListService;
const getSiteContentByIdService = async (id) => {
    const content = await (0, site_content_queries_1.getSiteContentById)(id);
    if (!content) {
        throw new http_1.AppError(404, "Site content not found");
    }
    return content;
};
exports.getSiteContentByIdService = getSiteContentByIdService;
const getSiteContentBySectionKeyService = async (sectionKey) => {
    const content = await (0, site_content_queries_1.getSiteContentBySectionKey)(sectionKey);
    if (!content) {
        throw new http_1.AppError(404, "Site content not found");
    }
    return content;
};
exports.getSiteContentBySectionKeyService = getSiteContentBySectionKeyService;
const updateSiteContentService = async (id, data) => {
    const content = await (0, site_content_queries_1.getSiteContentById)(id);
    if (!content) {
        throw new http_1.AppError(404, "Site content not found");
    }
    if (data.sectionKey && data.sectionKey !== content.sectionKey) {
        const existingContent = await (0, site_content_queries_1.getSiteContentBySectionKey)(data.sectionKey);
        if (existingContent) {
            throw new http_1.AppError(409, "Site content sectionKey already exists");
        }
    }
    await validateSiteContentReferences(data);
    return (0, site_content_queries_1.updateSiteContent)(id, {
        ...data,
        updatedAt: new Date(),
    });
};
exports.updateSiteContentService = updateSiteContentService;
const deleteSiteContentService = async (id) => {
    const content = await (0, site_content_queries_1.getSiteContentById)(id);
    if (!content) {
        throw new http_1.AppError(404, "Site content not found");
    }
    await (0, site_content_queries_1.deleteSiteContent)(id);
};
exports.deleteSiteContentService = deleteSiteContentService;
