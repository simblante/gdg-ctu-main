"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventSpeakerSchema = exports.CreateEventSpeakerSchema = exports.EventSpeakerSchema = void 0;
const drizzle_zod_1 = require("drizzle-zod");
const zod_1 = require("zod");
const event_speaker_1 = require("./models/event-speaker");
exports.EventSpeakerSchema = (0, drizzle_zod_1.createSelectSchema)(event_speaker_1.eventSpeakers);
exports.CreateEventSpeakerSchema = (0, drizzle_zod_1.createInsertSchema)(event_speaker_1.eventSpeakers)
    .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
})
    .extend({
    firstName: zod_1.z.string().trim().min(1),
    lastName: zod_1.z.string().trim().min(1),
    slug: zod_1.z.string().trim().min(1),
    role: zod_1.z.string().trim().nullable().optional(),
    bio: zod_1.z.string().nullable().optional(),
    profileMediaId: zod_1.z.string().uuid().nullable().optional(),
    linkedinUrl: zod_1.z.string().url().nullable().optional(),
    githubUrl: zod_1.z.string().url().nullable().optional(),
    websiteUrl: zod_1.z.string().url().nullable().optional(),
    teamMemberId: zod_1.z.string().uuid().nullable().optional(),
});
exports.UpdateEventSpeakerSchema = exports.CreateEventSpeakerSchema.partial().refine((data) => Object.keys(data).length > 0, "At least one field is required");
