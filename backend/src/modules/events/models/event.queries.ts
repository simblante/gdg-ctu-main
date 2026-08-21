import { count, desc, eq } from "drizzle-orm";
import { db } from "../../../config/connectDB";
import { Pagination } from "../../../utils/pagination";
import { events } from "./event";

export type EventRecord = typeof events.$inferSelect;
export type NewEventRecord = typeof events.$inferInsert;

export const insertEvent = async (data: NewEventRecord) => {
      const [event] = await db.insert(events).values(data).returning();
      return event;
};

export const getEvents = async (pagination: Pagination) =>
      db
            .select()
            .from(events)
            .orderBy(desc(events.startAt), desc(events.createdAt))
            .limit(pagination.limit)
            .offset(pagination.offset);

export const countEvents = async () => {
      const [result] = await db.select({ total: count() }).from(events);
      return result.total;
};

export const getEventById = async (id: string) => {
      const [event] = await db.select().from(events).where(eq(events.id, id));
      return event;
};

export const getEventBySlug = async (slug: string) => {
      const [event] = await db
            .select()
            .from(events)
            .where(eq(events.slug, slug));
      return event;
};

export const updateEvent = async (
      id: string,
      data: Partial<NewEventRecord>,
) => {
      const [event] = await db
            .update(events)
            .set(data)
            .where(eq(events.id, id))
            .returning();
      return event;
};

export const deleteEvent = async (id: string) => {
      const [event] = await db
            .delete(events)
            .where(eq(events.id, id))
            .returning();
      return event;
};
