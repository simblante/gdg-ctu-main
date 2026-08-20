import { count, eq } from "drizzle-orm";
import { db } from "../../../config/connectDB";
import { Pagination } from "../../../utils/pagination";
import { events } from "../../events/models/event";
import { media } from "../../media/models/media";
import { siteContent } from "../../site-content/models/site-content";
import { admins } from "./admin";

export type AdminRecord = typeof admins.$inferSelect;
export type NewAdminRecord = typeof admins.$inferInsert;

export const insertAdmin = async (data: NewAdminRecord) => {
      const [admin] = await db.insert(admins).values(data).returning();
      return admin;
};

export const getAdmins = async (pagination: Pagination) =>
      db
            .select()
            .from(admins)
            .limit(pagination.limit)
            .offset(pagination.offset);

export const countAdmins = async () => {
      const [result] = await db.select({ total: count() }).from(admins);
      return result.total;
};

export const getAdminById = async (id: string) => {
      const [admin] = await db.select().from(admins).where(eq(admins.id, id));
      return admin;
};

export const getAdminByEmail = async (email: string) => {
      const [admin] = await db
            .select()
            .from(admins)
            .where(eq(admins.email, email.toLowerCase()));
      return admin;
};

export const updateAdmin = async (
      id: string,
      data: Partial<NewAdminRecord>,
) => {
      const [admin] = await db
            .update(admins)
            .set(data)
            .where(eq(admins.id, id))
            .returning();
      return admin;
};

export const deleteAdmin = async (id: string) => {
      const [admin] = await db
            .delete(admins)
            .where(eq(admins.id, id))
            .returning();
      return admin;
};

export const adminHasReferences = async (id: string) => {
      const [event] = await db
            .select({ id: events.id })
            .from(events)
            .where(eq(events.createdBy, id))
            .limit(1);

      const [uploadedMedia] = await db
            .select({ id: media.id })
            .from(media)
            .where(eq(media.uploadedBy, id))
            .limit(1);

      const [content] = await db
            .select({ id: siteContent.id })
            .from(siteContent)
            .where(eq(siteContent.updatedBy, id))
            .limit(1);

      return Boolean(event || uploadedMedia || content);
};
