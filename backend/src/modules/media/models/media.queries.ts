import { count, eq } from "drizzle-orm";
import { db } from "../../../config/connectDB";
import { Pagination } from "../../../utils/pagination";
import { events } from "../../events/models/event";
import { siteContent } from "../../site-content/models/site-content";
import { teamMembers } from "../../team-members/models/team-member";
import { media } from "./media";

export type MediaRecord = typeof media.$inferSelect;
export type NewMediaRecord = typeof media.$inferInsert;

export const insertMedia = async (data: NewMediaRecord) => {
      const [record] = await db.insert(media).values(data).returning();
      return record;
};

export const getMedia = async (pagination: Pagination) =>
      db
            .select()
            .from(media)
            .limit(pagination.limit)
            .offset(pagination.offset);

export const countMedia = async () => {
      const [result] = await db.select({ total: count() }).from(media);
      return result.total;
};

export const getMediaById = async (id: string) => {
      const [record] = await db.select().from(media).where(eq(media.id, id));
      return record;
};

export const getMediaByStorageKey = async (storageKey: string) => {
      const [record] = await db
            .select()
            .from(media)
            .where(eq(media.storageKey, storageKey));
      return record;
};

export const updateMedia = async (
      id: string,
      data: Partial<NewMediaRecord>,
) => {
      const [record] = await db
            .update(media)
            .set(data)
            .where(eq(media.id, id))
            .returning();
      return record;
};

export const deleteMedia = async (id: string) => {
      const [record] = await db
            .delete(media)
            .where(eq(media.id, id))
            .returning();
      return record;
};

export const mediaHasReferences = async (id: string) => {
      const [teamMember] = await db
            .select({ id: teamMembers.id })
            .from(teamMembers)
            .where(eq(teamMembers.profileMediaId, id))
            .limit(1);

      const [event] = await db
            .select({ id: events.id })
            .from(events)
            .where(eq(events.coverMediaId, id))
            .limit(1);

      const [content] = await db
            .select({ id: siteContent.id })
            .from(siteContent)
            .where(eq(siteContent.mediaId, id))
            .limit(1);

      return Boolean(teamMember || event || content);
};
