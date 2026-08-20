import { asc, count, eq } from "drizzle-orm";
import { db } from "../../../config/connectDB";
import { Pagination } from "../../../utils/pagination";
import { siteContent } from "./site-content";

export type SiteContentRecord = typeof siteContent.$inferSelect;
export type NewSiteContentRecord = typeof siteContent.$inferInsert;

export const insertSiteContent = async (data: NewSiteContentRecord) => {
      const [content] = await db
            .insert(siteContent)
            .values(data)
            .returning();
      return content;
};

export const getSiteContentList = async (pagination: Pagination) =>
      db
            .select()
            .from(siteContent)
            .orderBy(asc(siteContent.sectionKey))
            .limit(pagination.limit)
            .offset(pagination.offset);

export const countSiteContent = async () => {
      const [result] = await db.select({ total: count() }).from(siteContent);
      return result.total;
};

export const getSiteContentById = async (id: string) => {
      const [content] = await db
            .select()
            .from(siteContent)
            .where(eq(siteContent.id, id));
      return content;
};

export const getSiteContentBySectionKey = async (sectionKey: string) => {
      const [content] = await db
            .select()
            .from(siteContent)
            .where(eq(siteContent.sectionKey, sectionKey));
      return content;
};

export const updateSiteContent = async (
      id: string,
      data: Partial<NewSiteContentRecord>,
) => {
      const [content] = await db
            .update(siteContent)
            .set(data)
            .where(eq(siteContent.id, id))
            .returning();
      return content;
};

export const deleteSiteContent = async (id: string) => {
      const [content] = await db
            .delete(siteContent)
            .where(eq(siteContent.id, id))
            .returning();
      return content;
};
