import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { eventAttendees } from "./models/event-attendee";

export const EventAttendeeRecordSchema = createSelectSchema(eventAttendees);

export const EventAttendeeSchema = EventAttendeeRecordSchema.omit({});

export const CreateEventAttendeeSchema = createInsertSchema(eventAttendees)
      .omit({ id: true, createdAt: true, updatedAt: true, registeredAt: true })
      .extend({
            eventId: z.string().uuid(),
            firstName: z.string().min(1),
            lastName: z.string().min(1),
            email: z.string().email(),
            phone: z.string().optional(),
            organization: z.string().optional(),
            jobTitle: z.string().optional(),
            registrationStatus: z.string().min(1),
            attendedAt: z.date().optional(),
      });

export const UpdateEventAttendeeSchema = CreateEventAttendeeSchema.partial().refine(
      data => Object.keys(data).length > 0,
      "At least one field is required",
);

export type EventAttendeeRecord = z.infer<typeof EventAttendeeRecordSchema>;
export type EventAttendee = z.infer<typeof EventAttendeeSchema>;
export type CreateEventAttendeeDTO = z.infer<typeof CreateEventAttendeeSchema>;
export type UpdateEventAttendeeDTO = z.infer<typeof UpdateEventAttendeeSchema>;
