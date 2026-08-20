"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaHasReferences = exports.deleteMedia = exports.updateMedia = exports.getMediaByStorageKey = exports.getMediaById = exports.countMedia = exports.getMedia = exports.insertMedia = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const connectDB_1 = require("../../../config/connectDB");
const event_speaker_1 = require("../../event-speakers/models/event-speaker");
const event_1 = require("../../events/models/event");
const site_content_1 = require("../../site-content/models/site-content");
const team_member_1 = require("../../team-members/models/team-member");
const media_1 = require("./media");
const insertMedia = async (data) => {
    const [record] = await connectDB_1.db.insert(media_1.media).values(data).returning();
    return record;
};
exports.insertMedia = insertMedia;
const getMedia = async (pagination) => connectDB_1.db
    .select()
    .from(media_1.media)
    .limit(pagination.limit)
    .offset(pagination.offset);
exports.getMedia = getMedia;
const countMedia = async () => {
    const [result] = await connectDB_1.db.select({ total: (0, drizzle_orm_1.count)() }).from(media_1.media);
    return result.total;
};
exports.countMedia = countMedia;
const getMediaById = async (id) => {
    const [record] = await connectDB_1.db.select().from(media_1.media).where((0, drizzle_orm_1.eq)(media_1.media.id, id));
    return record;
};
exports.getMediaById = getMediaById;
const getMediaByStorageKey = async (storageKey) => {
    const [record] = await connectDB_1.db
        .select()
        .from(media_1.media)
        .where((0, drizzle_orm_1.eq)(media_1.media.storageKey, storageKey));
    return record;
};
exports.getMediaByStorageKey = getMediaByStorageKey;
const updateMedia = async (id, data) => {
    const [record] = await connectDB_1.db
        .update(media_1.media)
        .set(data)
        .where((0, drizzle_orm_1.eq)(media_1.media.id, id))
        .returning();
    return record;
};
exports.updateMedia = updateMedia;
const deleteMedia = async (id) => {
    const [record] = await connectDB_1.db
        .delete(media_1.media)
        .where((0, drizzle_orm_1.eq)(media_1.media.id, id))
        .returning();
    return record;
};
exports.deleteMedia = deleteMedia;
const mediaHasReferences = async (id) => {
    const [teamMember] = await connectDB_1.db
        .select({ id: team_member_1.teamMembers.id })
        .from(team_member_1.teamMembers)
        .where((0, drizzle_orm_1.eq)(team_member_1.teamMembers.profileMediaId, id))
        .limit(1);
    const [event] = await connectDB_1.db
        .select({ id: event_1.events.id })
        .from(event_1.events)
        .where((0, drizzle_orm_1.eq)(event_1.events.coverMediaId, id))
        .limit(1);
    const [eventSpeaker] = await connectDB_1.db
        .select({ id: event_speaker_1.eventSpeakers.id })
        .from(event_speaker_1.eventSpeakers)
        .where((0, drizzle_orm_1.eq)(event_speaker_1.eventSpeakers.profileMediaId, id))
        .limit(1);
    const [content] = await connectDB_1.db
        .select({ id: site_content_1.siteContent.id })
        .from(site_content_1.siteContent)
        .where((0, drizzle_orm_1.eq)(site_content_1.siteContent.mediaId, id))
        .limit(1);
    return Boolean(teamMember || event || eventSpeaker || content);
};
exports.mediaHasReferences = mediaHasReferences;
