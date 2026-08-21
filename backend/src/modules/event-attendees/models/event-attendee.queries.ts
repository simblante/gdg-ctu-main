import { asc, count, eq } from "drizzle-orm";
import { db } from "../../../config/connectDB";
import { Pagination } from "../../../utils/pagination";
import { eventAttendees } from "./event-attendee";

export type EventAttendeeRecord = typeof eventAttendees.$inferSelect;
export type NewEventAttendeeRecord = typeof eventAttendees.$inferInsert;

export const insertEventAttendee = async (data: NewEventAttendeeRecord) => {
      const [att] = await db.insert(eventAttendees).values(data).returning();
      return att;
};

export const getEventAttendees = async (pagination: Pagination) =>
      db
            .select()
            .from(eventAttendees)
            .orderBy(
                  asc(eventAttendees.lastName),
                  asc(eventAttendees.firstName),
            )
            .limit(pagination.limit)
            .offset(pagination.offset);

export const countEventAttendees = async () => {
      const [result] = await db.select({ total: count() }).from(eventAttendees);
      return result.total;
};

export const getEventAttendeeById = async (id: string) => {
      const [att] = await db
            .select()
            .from(eventAttendees)
            .where(eq(eventAttendees.id, id));
      return att;
};

export const updateEventAttendee = async (
      id: string,
      data: Partial<NewEventAttendeeRecord>,
) => {
      const [att] = await db
            .update(eventAttendees)
            .set(data)
            .where(eq(eventAttendees.id, id))
            .returning();
      return att;
};

export const deleteEventAttendee = async (id: string) => {
      const [att] = await db
            .delete(eventAttendees)
            .where(eq(eventAttendees.id, id))
            .returning();
      return att;
};
