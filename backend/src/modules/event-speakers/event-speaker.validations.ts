import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { eventSpeakers } from "./models/event-speaker";

export const EventSpeakerSchema = createSelectSchema(eventSpeakers);

export const CreateEventSpeakerSchema = createInsertSchema(eventSpeakers)
      .omit({
            id: true,
            createdAt: true,
            updatedAt: true,
      })
      .extend({
            firstName: z.string().trim().min(1),
            lastName: z.string().trim().min(1),
            slug: z.string().trim().min(1),
            role: z.string().trim().nullable().optional(),
            bio: z.string().nullable().optional(),
            profileMediaId: z.string().uuid().nullable().optional(),
            linkedinUrl: z.string().url().nullable().optional(),
            githubUrl: z.string().url().nullable().optional(),
            websiteUrl: z.string().url().nullable().optional(),
            teamMemberId: z.string().uuid().nullable().optional(),
      });

export const UpdateEventSpeakerSchema = CreateEventSpeakerSchema.partial().refine(
      (data) => Object.keys(data).length > 0,
      "At least one field is required",
);

export type EventSpeaker = z.infer<typeof EventSpeakerSchema>;
export type CreateEventSpeakerDTO = z.infer<typeof CreateEventSpeakerSchema>;
export type UpdateEventSpeakerDTO = z.infer<typeof UpdateEventSpeakerSchema>;
