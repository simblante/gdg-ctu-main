"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventSchema = exports.CreateEventSchema = exports.EventSchema = void 0;
const drizzle_zod_1 = require("drizzle-zod");
const zod_1 = require("zod");
const event_1 = require("./models/event");
const eventDateRule = (data, ctx) => {
    if (data.startAt && data.endAt && data.endAt < data.startAt) {
        ctx.addIssue({
            code: "custom",
            message: "endAt must not be earlier than startAt",
            path: ["endAt"],
        });
    }
};
exports.EventSchema = (0, drizzle_zod_1.createSelectSchema)(event_1.events);
const BaseCreateEventSchema = (0, drizzle_zod_1.createInsertSchema)(event_1.events)
    .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    publishedAt: true,
})
    .extend({
    title: zod_1.z.string().trim().min(1),
    slug: zod_1.z.string().trim().min(1),
    shortDescription: zod_1.z.string().nullable().optional(),
    description: zod_1.z.string().nullable().optional(),
    coverMediaId: zod_1.z.string().uuid().nullable().optional(),
    location: zod_1.z.string().trim().nullable().optional(),
    registrationUrl: zod_1.z.string().url().nullable().optional(),
    startAt: zod_1.z.coerce.date(),
    endAt: zod_1.z.coerce.date(),
    status: zod_1.z.enum(event_1.EVENT_STATUSES).default("draft"),
    createdBy: zod_1.z.string().uuid(),
});
exports.CreateEventSchema = BaseCreateEventSchema.superRefine(eventDateRule);
exports.UpdateEventSchema = BaseCreateEventSchema.partial()
    .refine((data) => Object.keys(data).length > 0, "At least one field is required")
    .superRefine(eventDateRule);
