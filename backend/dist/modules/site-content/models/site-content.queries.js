"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSiteContent = exports.updateSiteContent = exports.getSiteContentBySectionKey = exports.getSiteContentById = exports.countSiteContent = exports.getSiteContentList = exports.insertSiteContent = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const connectDB_1 = require("../../../config/connectDB");
const site_content_1 = require("./site-content");
const insertSiteContent = async (data) => {
    const [content] = await connectDB_1.db
        .insert(site_content_1.siteContent)
        .values(data)
        .returning();
    return content;
};
exports.insertSiteContent = insertSiteContent;
const getSiteContentList = async (pagination) => connectDB_1.db
    .select()
    .from(site_content_1.siteContent)
    .orderBy((0, drizzle_orm_1.asc)(site_content_1.siteContent.sectionKey))
    .limit(pagination.limit)
    .offset(pagination.offset);
exports.getSiteContentList = getSiteContentList;
const countSiteContent = async () => {
    const [result] = await connectDB_1.db.select({ total: (0, drizzle_orm_1.count)() }).from(site_content_1.siteContent);
    return result.total;
};
exports.countSiteContent = countSiteContent;
const getSiteContentById = async (id) => {
    const [content] = await connectDB_1.db
        .select()
        .from(site_content_1.siteContent)
        .where((0, drizzle_orm_1.eq)(site_content_1.siteContent.id, id));
    return content;
};
exports.getSiteContentById = getSiteContentById;
const getSiteContentBySectionKey = async (sectionKey) => {
    const [content] = await connectDB_1.db
        .select()
        .from(site_content_1.siteContent)
        .where((0, drizzle_orm_1.eq)(site_content_1.siteContent.sectionKey, sectionKey));
    return content;
};
exports.getSiteContentBySectionKey = getSiteContentBySectionKey;
const updateSiteContent = async (id, data) => {
    const [content] = await connectDB_1.db
        .update(site_content_1.siteContent)
        .set(data)
        .where((0, drizzle_orm_1.eq)(site_content_1.siteContent.id, id))
        .returning();
    return content;
};
exports.updateSiteContent = updateSiteContent;
const deleteSiteContent = async (id) => {
    const [content] = await connectDB_1.db
        .delete(site_content_1.siteContent)
        .where((0, drizzle_orm_1.eq)(site_content_1.siteContent.id, id))
        .returning();
    return content;
};
exports.deleteSiteContent = deleteSiteContent;
