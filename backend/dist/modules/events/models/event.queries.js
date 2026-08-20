"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.updateEvent = exports.getEventBySlug = exports.getEventById = exports.countEvents = exports.getEvents = exports.insertEvent = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const connectDB_1 = require("../../../config/connectDB");
const event_1 = require("./event");
const insertEvent = async (data) => {
    const [event] = await connectDB_1.db.insert(event_1.events).values(data).returning();
    return event;
};
exports.insertEvent = insertEvent;
const getEvents = async (pagination) => connectDB_1.db
    .select()
    .from(event_1.events)
    .orderBy((0, drizzle_orm_1.desc)(event_1.events.startAt), (0, drizzle_orm_1.desc)(event_1.events.createdAt))
    .limit(pagination.limit)
    .offset(pagination.offset);
exports.getEvents = getEvents;
const countEvents = async () => {
    const [result] = await connectDB_1.db.select({ total: (0, drizzle_orm_1.count)() }).from(event_1.events);
    return result.total;
};
exports.countEvents = countEvents;
const getEventById = async (id) => {
    const [event] = await connectDB_1.db.select().from(event_1.events).where((0, drizzle_orm_1.eq)(event_1.events.id, id));
    return event;
};
exports.getEventById = getEventById;
const getEventBySlug = async (slug) => {
    const [event] = await connectDB_1.db
        .select()
        .from(event_1.events)
        .where((0, drizzle_orm_1.eq)(event_1.events.slug, slug));
    return event;
};
exports.getEventBySlug = getEventBySlug;
const updateEvent = async (id, data) => {
    const [event] = await connectDB_1.db
        .update(event_1.events)
        .set(data)
        .where((0, drizzle_orm_1.eq)(event_1.events.id, id))
        .returning();
    return event;
};
exports.updateEvent = updateEvent;
const deleteEvent = async (id) => {
    const [event] = await connectDB_1.db
        .delete(event_1.events)
        .where((0, drizzle_orm_1.eq)(event_1.events.id, id))
        .returning();
    return event;
};
exports.deleteEvent = deleteEvent;
