"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminHasReferences = exports.deleteAdmin = exports.updateAdmin = exports.getAdminByEmail = exports.getAdminById = exports.countAdmins = exports.getAdmins = exports.insertAdmin = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const connectDB_1 = require("../../../config/connectDB");
const event_1 = require("../../events/models/event");
const media_1 = require("../../media/models/media");
const site_content_1 = require("../../site-content/models/site-content");
const admin_1 = require("./admin");
const insertAdmin = async (data) => {
    const [admin] = await connectDB_1.db.insert(admin_1.admins).values(data).returning();
    return admin;
};
exports.insertAdmin = insertAdmin;
const getAdmins = async (pagination) => connectDB_1.db
    .select()
    .from(admin_1.admins)
    .limit(pagination.limit)
    .offset(pagination.offset);
exports.getAdmins = getAdmins;
const countAdmins = async () => {
    const [result] = await connectDB_1.db.select({ total: (0, drizzle_orm_1.count)() }).from(admin_1.admins);
    return result.total;
};
exports.countAdmins = countAdmins;
const getAdminById = async (id) => {
    const [admin] = await connectDB_1.db.select().from(admin_1.admins).where((0, drizzle_orm_1.eq)(admin_1.admins.id, id));
    return admin;
};
exports.getAdminById = getAdminById;
const getAdminByEmail = async (email) => {
    const [admin] = await connectDB_1.db
        .select()
        .from(admin_1.admins)
        .where((0, drizzle_orm_1.eq)(admin_1.admins.email, email.toLowerCase()));
    return admin;
};
exports.getAdminByEmail = getAdminByEmail;
const updateAdmin = async (id, data) => {
    const [admin] = await connectDB_1.db
        .update(admin_1.admins)
        .set(data)
        .where((0, drizzle_orm_1.eq)(admin_1.admins.id, id))
        .returning();
    return admin;
};
exports.updateAdmin = updateAdmin;
const deleteAdmin = async (id) => {
    const [admin] = await connectDB_1.db
        .delete(admin_1.admins)
        .where((0, drizzle_orm_1.eq)(admin_1.admins.id, id))
        .returning();
    return admin;
};
exports.deleteAdmin = deleteAdmin;
const adminHasReferences = async (id) => {
    const [event] = await connectDB_1.db
        .select({ id: event_1.events.id })
        .from(event_1.events)
        .where((0, drizzle_orm_1.eq)(event_1.events.createdBy, id))
        .limit(1);
    const [uploadedMedia] = await connectDB_1.db
        .select({ id: media_1.media.id })
        .from(media_1.media)
        .where((0, drizzle_orm_1.eq)(media_1.media.uploadedBy, id))
        .limit(1);
    const [content] = await connectDB_1.db
        .select({ id: site_content_1.siteContent.id })
        .from(site_content_1.siteContent)
        .where((0, drizzle_orm_1.eq)(site_content_1.siteContent.updatedBy, id))
        .limit(1);
    return Boolean(event || uploadedMedia || content);
};
exports.adminHasReferences = adminHasReferences;
