import { asc, count, eq } from "drizzle-orm";
import { db } from "../../../config/connectDB";
import { Pagination } from "../../../utils/pagination";
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

export const getEventSpeakers = async (pagination: Pagination) =>
      db
            .select()
            .from(eventSpeakers)
            .orderBy(asc(eventSpeakers.lastName), asc(eventSpeakers.firstName))
            .limit(pagination.limit)
            .offset(pagination.offset);

export const countEventSpeakers = async () => {
      const [result] = await db
            .select({ total: count() })
            .from(eventSpeakers);
      return result.total;
};

export const getEventSpeakerById = async (id: string) => {
      const [speaker] = await db
            .select()
            .from(eventSpeakers)
            .where(eq(eventSpeakers.id, id));
      return speaker;
};

export const getEventSpeakerBySlug = async (slug: string) => {
      const [speaker] = await db
            .select()
            .from(eventSpeakers)
            .where(eq(eventSpeakers.slug, slug));
      return speaker;
};

export const getEventSpeakersByTeamMemberId = async (
      teamMemberId: string,
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
            .where(eq(eventSpeakers.teamMemberId, teamMemberId))
            .orderBy(asc(eventSpeakers.lastName), asc(eventSpeakers.firstName))
            .limit(pagination.limit)
            .offset(pagination.offset);

export const countEventSpeakersByTeamMemberId = async (
      teamMemberId: string,
) => {
      const [result] = await db
            .select({ total: count() })
            .from(eventSpeakers)
            .where(eq(eventSpeakers.teamMemberId, teamMemberId));

      return result.total;
};

export const updateEventSpeaker = async (
      id: string,
      data: Partial<NewEventSpeakerRecord>,
) => {
      const [speaker] = await db
            .update(eventSpeakers)
            .set(data)
            .where(eq(eventSpeakers.id, id))
            .returning();

      return speaker;
};

export const deleteEventSpeaker = async (id: string) => {
      const [speaker] = await db
            .delete(eventSpeakers)
            .where(eq(eventSpeakers.id, id))
            .returning();

      return speaker;
};
