import { asc, count, eq } from "drizzle-orm";
import { db } from "../../../config/connectDB";
import { Pagination } from "../../../utils/pagination";
import { eventHosts } from "./event-host";

export type EventHostRecord = typeof eventHosts.$inferSelect;
export type NewEventHostRecord = typeof eventHosts.$inferInsert;

export const insertEventHost = async (data: NewEventHostRecord) => {
      const [host] = await db.insert(eventHosts).values(data).returning();
      return host;
};

export const getEventHosts = async (pagination: Pagination) =>
      db
            .select()
            .from(eventHosts)
            .orderBy(asc(eventHosts.displayOrder))
            .limit(pagination.limit)
            .offset(pagination.offset);

export const countEventHosts = async () => {
      const [result] = await db.select({ total: count() }).from(eventHosts);
      return result.total;
};

export const getEventHostById = async (id: string) => {
      const [host] = await db
            .select()
            .from(eventHosts)
            .where(eq(eventHosts.id, id));
      return host;
};

export const updateEventHost = async (
      id: string,
      data: Partial<NewEventHostRecord>,
) => {
      const [host] = await db
            .update(eventHosts)
            .set(data)
            .where(eq(eventHosts.id, id))
            .returning();
      return host;
};

export const deleteEventHost = async (id: string) => {
      const [host] = await db
            .delete(eventHosts)
            .where(eq(eventHosts.id, id))
            .returning();
      return host;
};
