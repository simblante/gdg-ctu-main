import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { media } from "./models/media";

export const MediaSchema = createSelectSchema(media);

export const CreateMediaSchema = createInsertSchema(media)
      .omit({
            id: true,
            createdAt: true,
      })
      .extend({
            uploadedBy: z.string().uuid(),
            filename: z.string().trim().min(1),
            storageKey: z.string().trim().min(1),
            url: z.string().url(),
            mimeType: z.string().trim().min(1),
            fileSize: z.number().int().positive(),
            altText: z.string().trim().nullable().optional(),
      });

export const UpdateMediaSchema = CreateMediaSchema.partial().refine(
      (data) => Object.keys(data).length > 0,
      "At least one field is required",
);

export type Media = z.infer<typeof MediaSchema>;
export type CreateMediaDTO = z.infer<typeof CreateMediaSchema>;
export type UpdateMediaDTO = z.infer<typeof UpdateMediaSchema>;
