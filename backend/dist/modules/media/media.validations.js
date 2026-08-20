"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMediaSchema = exports.CreateMediaSchema = exports.MediaSchema = void 0;
const drizzle_zod_1 = require("drizzle-zod");
const zod_1 = require("zod");
const media_1 = require("./models/media");
exports.MediaSchema = (0, drizzle_zod_1.createSelectSchema)(media_1.media);
exports.CreateMediaSchema = (0, drizzle_zod_1.createInsertSchema)(media_1.media)
    .omit({
    id: true,
    createdAt: true,
})
    .extend({
    uploadedBy: zod_1.z.string().uuid(),
    filename: zod_1.z.string().trim().min(1),
    storageKey: zod_1.z.string().trim().min(1),
    url: zod_1.z.string().url(),
    mimeType: zod_1.z.string().trim().min(1),
    fileSize: zod_1.z.number().int().positive(),
    altText: zod_1.z.string().trim().nullable().optional(),
});
exports.UpdateMediaSchema = exports.CreateMediaSchema.partial().refine((data) => Object.keys(data).length > 0, "At least one field is required");
