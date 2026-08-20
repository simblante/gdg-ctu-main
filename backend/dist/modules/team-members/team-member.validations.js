"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTeamMemberSchema = exports.CreateTeamMemberSchema = exports.TeamMemberSchema = void 0;
const drizzle_zod_1 = require("drizzle-zod");
const zod_1 = require("zod");
const team_member_1 = require("./models/team-member");
exports.TeamMemberSchema = (0, drizzle_zod_1.createSelectSchema)(team_member_1.teamMembers);
exports.CreateTeamMemberSchema = (0, drizzle_zod_1.createInsertSchema)(team_member_1.teamMembers)
    .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
})
    .extend({
    firstName: zod_1.z.string().trim().min(1),
    lastName: zod_1.z.string().trim().min(1),
    slug: zod_1.z.string().trim().min(1),
    role: zod_1.z.string().trim().min(1),
    bio: zod_1.z.string().nullable().optional(),
    profileMediaId: zod_1.z.string().uuid().nullable().optional(),
    linkedinUrl: zod_1.z.string().url().nullable().optional(),
    githubUrl: zod_1.z.string().url().nullable().optional(),
    websiteUrl: zod_1.z.string().url().nullable().optional(),
    displayOrder: zod_1.z.number().int().optional(),
    isActive: zod_1.z.boolean().optional(),
});
exports.UpdateTeamMemberSchema = exports.CreateTeamMemberSchema.partial().refine((data) => Object.keys(data).length > 0, "At least one field is required");
