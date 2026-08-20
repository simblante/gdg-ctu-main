import { asc, count, desc, eq } from "drizzle-orm";
import { db } from "../../../config/connectDB";
import { Pagination } from "../../../utils/pagination";
import { eventSpeakers } from "../../event-speakers/models/event-speaker";
import { teamMembers } from "../../team-members/models/team-member";
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

export const getEventByIdWithSpeakers = async (id: string) => {
      const rows = await db
            .select({
                  event: events,
                  eventSpeaker: eventSpeakers,
                  teamMember: teamMembers,
            })
            .from(events)
            .leftJoin(eventSpeakers, eq(eventSpeakers.eventId, events.id))
            .leftJoin(
                  teamMembers,
                  eq(teamMembers.id, eventSpeakers.teamMemberId),
            )
            .where(eq(events.id, id))
            .orderBy(asc(eventSpeakers.displayOrder));

      if (rows.length === 0) {
            return undefined;
      }

      return {
            ...rows[0].event,
            speakers: rows
                  .filter((row) => row.eventSpeaker && row.teamMember)
                  .map((row) => ({
                        ...row.eventSpeaker!,
                        teamMember: row.teamMember!,
                  })),
      };
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

export const eventHasSpeakerReferences = async (id: string) => {
      const [speaker] = await db
            .select({ teamMemberId: eventSpeakers.teamMemberId })
            .from(eventSpeakers)
            .where(eq(eventSpeakers.eventId, id))
            .limit(1);

      return Boolean(speaker);
};
