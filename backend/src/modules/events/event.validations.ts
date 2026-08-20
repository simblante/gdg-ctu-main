import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { EVENT_STATUSES, events } from "./models/event";

const eventDateRule = <
      T extends {
            startAt?: Date;
            endAt?: Date;
      },
>(
      data: T,
      ctx: z.RefinementCtx,
) => {
      if (data.startAt && data.endAt && data.endAt < data.startAt) {
            ctx.addIssue({
                  code: "custom",
                  message: "endAt must not be earlier than startAt",
                  path: ["endAt"],
            });
      }
};

export const EventSchema = createSelectSchema(events);

const BaseCreateEventSchema = createInsertSchema(events)
      .omit({
            id: true,
            createdAt: true,
            updatedAt: true,
            publishedAt: true,
      })
      .extend({
            title: z.string().trim().min(1),
            slug: z.string().trim().min(1),
            shortDescription: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            coverMediaId: z.string().uuid().nullable().optional(),
            location: z.string().trim().nullable().optional(),
            registrationUrl: z.string().url().nullable().optional(),
            startAt: z.coerce.date(),
            endAt: z.coerce.date(),
            status: z.enum(EVENT_STATUSES).default("draft"),
            createdBy: z.string().uuid(),
      });

export const CreateEventSchema =
      BaseCreateEventSchema.superRefine(eventDateRule);

export const UpdateEventSchema = BaseCreateEventSchema.partial()
      .refine(
            (data) => Object.keys(data).length > 0,
            "At least one field is required",
      )
      .superRefine(eventDateRule);

export type Event = z.infer<typeof EventSchema>;
export type CreateEventDTO = z.infer<typeof CreateEventSchema>;
export type UpdateEventDTO = z.infer<typeof UpdateEventSchema>;
