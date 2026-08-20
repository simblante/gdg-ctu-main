"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdminSchema = exports.CreateAdminSchema = exports.AdminSchema = exports.AdminRecordSchema = void 0;
const drizzle_zod_1 = require("drizzle-zod");
const zod_1 = require("zod");
const admin_1 = require("./models/admin");
exports.AdminRecordSchema = (0, drizzle_zod_1.createSelectSchema)(admin_1.admins);
exports.AdminSchema = exports.AdminRecordSchema.omit({
    passwordHash: true,
});
exports.CreateAdminSchema = (0, drizzle_zod_1.createInsertSchema)(admin_1.admins)
    .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
})
    .extend({
    email: zod_1.z.email().trim().toLowerCase(),
    passwordHash: zod_1.z.string().min(20),
    firstName: zod_1.z.string().trim().min(1),
    lastName: zod_1.z.string().trim().min(1),
    isActive: zod_1.z.boolean().optional(),
});
exports.UpdateAdminSchema = exports.CreateAdminSchema.partial().refine((data) => Object.keys(data).length > 0, "At least one field is required");
