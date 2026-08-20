import { and, asc, count, eq } from "drizzle-orm";
import { db } from "../../../config/connectDB";
import { Pagination } from "../../../utils/pagination";
import { events } from "../../events/models/event";
import { teamMembers } from "../../team-members/models/team-member";
import { eventSpeakers } from "./event-speaker";

export type EventSpeakerRecord = typeof eventSpeakers.$inferSelect;
export type NewEventSpeakerRecord = typeof eventSpeakers.$inferInsert;

export const insertEventSpeaker = async (data: NewEventSpeakerRecord) => {
      const [speaker] = await db
            .insert(eventSpeakers)
            .values(data)
            .returning();
      return speaker;
};

export const getEventSpeaker = async (
      eventId: string,
      teamMemberId: string,
) => {
      const [speaker] = await db
            .select()
            .from(eventSpeakers)
            .where(
                  and(
                        eq(eventSpeakers.eventId, eventId),
                        eq(eventSpeakers.teamMemberId, teamMemberId),
                  ),
            );

      return speaker;
};

export const getSpeakersByEventId = async (
      eventId: string,
      pagination: Pagination,
) =>
      db
            .select({
                  eventSpeaker: eventSpeakers,
                  teamMember: teamMembers,
            })
            .from(eventSpeakers)
            .innerJoin(
                  teamMembers,
                  eq(teamMembers.id, eventSpeakers.teamMemberId),
            )
            .where(eq(eventSpeakers.eventId, eventId))
            .orderBy(asc(eventSpeakers.displayOrder))
            .limit(pagination.limit)
            .offset(pagination.offset);

export const countSpeakersByEventId = async (eventId: string) => {
      const [result] = await db
            .select({ total: count() })
            .from(eventSpeakers)
            .where(eq(eventSpeakers.eventId, eventId));

      return result.total;
};

export const getEventsByTeamMemberId = async (
      teamMemberId: string,
      pagination: Pagination,
) =>
      db
            .select({
                  eventSpeaker: eventSpeakers,
                  event: events,
            })
            .from(eventSpeakers)
            .innerJoin(events, eq(events.id, eventSpeakers.eventId))
            .where(eq(eventSpeakers.teamMemberId, teamMemberId))
            .orderBy(asc(eventSpeakers.displayOrder))
            .limit(pagination.limit)
            .offset(pagination.offset);

export const countEventsByTeamMemberId = async (teamMemberId: string) => {
      const [result] = await db
            .select({ total: count() })
            .from(eventSpeakers)
            .where(eq(eventSpeakers.teamMemberId, teamMemberId));

      return result.total;
};

export const updateEventSpeaker = async (
      eventId: string,
      teamMemberId: string,
      data: Partial<
            Pick<NewEventSpeakerRecord, "role" | "displayOrder">
      >,
) => {
      const [speaker] = await db
            .update(eventSpeakers)
            .set(data)
            .where(
                  and(
                        eq(eventSpeakers.eventId, eventId),
                        eq(eventSpeakers.teamMemberId, teamMemberId),
                  ),
            )
            .returning();

      return speaker;
};

export const deleteEventSpeaker = async (
      eventId: string,
      teamMemberId: string,
) => {
      const [speaker] = await db
            .delete(eventSpeakers)
            .where(
                  and(
                        eq(eventSpeakers.eventId, eventId),
                        eq(eventSpeakers.teamMemberId, teamMemberId),
                  ),
            )
            .returning();

      return speaker;
};
