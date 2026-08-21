import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { eventHosts } from "./models/event-host";

export const EventHostRecordSchema = createSelectSchema(eventHosts);

export const EventHostSchema = EventHostRecordSchema.omit({}); // no fields omitted for now

export const CreateEventHostSchema = createInsertSchema(eventHosts)
      .omit({ id: true })
      .extend({
            eventId: z.string().uuid(),
            teamMemberId: z.string().uuid(),
            hostRole: z.string().min(1),
            displayOrder: z.number().int().optional(),
      });

export const UpdateEventHostSchema = CreateEventHostSchema.partial().refine(
      data => Object.keys(data).length > 0,
      "At least one field is required",
);

export type EventHostRecord = z.infer<typeof EventHostRecordSchema>;
export type EventHost = z.infer<typeof EventHostSchema>;
export type CreateEventHostDTO = z.infer<typeof CreateEventHostSchema>;
export type UpdateEventHostDTO = z.infer<typeof UpdateEventHostSchema>;
