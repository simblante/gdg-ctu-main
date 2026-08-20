"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSiteContentSchema = exports.CreateSiteContentSchema = exports.SiteContentSchema = void 0;
const drizzle_zod_1 = require("drizzle-zod");
const zod_1 = require("zod");
const site_content_1 = require("./models/site-content");
exports.SiteContentSchema = (0, drizzle_zod_1.createSelectSchema)(site_content_1.siteContent);
exports.CreateSiteContentSchema = (0, drizzle_zod_1.createInsertSchema)(site_content_1.siteContent)
    .omit({
    id: true,
    updatedAt: true,
})
    .extend({
    sectionKey: zod_1.z.string().trim().min(1),
    title: zod_1.z.string().trim().min(1),
    subtitle: zod_1.z.string().nullable().optional(),
    body: zod_1.z.string().nullable().optional(),
    mediaId: zod_1.z.string().uuid().nullable().optional(),
    buttonText: zod_1.z.string().trim().nullable().optional(),
    buttonUrl: zod_1.z.string().url().nullable().optional(),
    isActive: zod_1.z.boolean().optional(),
    updatedBy: zod_1.z.string().uuid(),
});
exports.UpdateSiteContentSchema = exports.CreateSiteContentSchema.partial()
    .extend({
    updatedBy: zod_1.z.string().uuid(),
})
    .refine((data) => Object.keys(data).length > 1, "At least one content field is required");
