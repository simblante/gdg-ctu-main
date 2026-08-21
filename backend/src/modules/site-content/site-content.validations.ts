import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { siteContent } from "./models/site-content";

export const SiteContentSchema = createSelectSchema(siteContent);

export const CreateSiteContentSchema = createInsertSchema(siteContent)
      .omit({
            id: true,
            updatedAt: true,
      })
      .extend({
            sectionKey: z.string().trim().min(1),
            title: z.string().trim().min(1),
            subtitle: z.string().nullable().optional(),
            body: z.string().nullable().optional(),
            mediaId: z.string().uuid().nullable().optional(),
            buttonText: z.string().trim().nullable().optional(),
            buttonUrl: z.string().url().nullable().optional(),
            isActive: z.boolean().optional(),
            updatedBy: z.string().uuid(),
      });

export const UpdateSiteContentSchema = CreateSiteContentSchema.partial()
      .extend({
            updatedBy: z.string().uuid(),
      })
      .refine(
            (data) => Object.keys(data).length > 1,
            "At least one content field is required",
      );

export type SiteContent = z.infer<typeof SiteContentSchema>;
export type CreateSiteContentDTO = z.infer<typeof CreateSiteContentSchema>;
export type UpdateSiteContentDTO = z.infer<typeof UpdateSiteContentSchema>;
