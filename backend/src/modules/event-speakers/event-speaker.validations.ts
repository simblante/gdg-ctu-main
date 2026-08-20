import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { eventSpeakers } from "./models/event-speaker";

export const EventSpeakerSchema = createSelectSchema(eventSpeakers);

export const CreateEventSpeakerSchema = createInsertSchema(eventSpeakers)
      .omit({
            eventId: true,
      })
      .extend({
            teamMemberId: z.string().uuid(),
            role: z.string().trim().nullable().optional(),
            displayOrder: z.number().int().optional(),
      });

export const UpdateEventSpeakerSchema = CreateEventSpeakerSchema.omit({
      teamMemberId: true,
})
      .partial()
      .refine(
            (data) => Object.keys(data).length > 0,
            "At least one field is required",
      );

export type EventSpeaker = z.infer<typeof EventSpeakerSchema>;
export type CreateEventSpeakerDTO = z.infer<typeof CreateEventSpeakerSchema>;
export type UpdateEventSpeakerDTO = z.infer<typeof UpdateEventSpeakerSchema>;
