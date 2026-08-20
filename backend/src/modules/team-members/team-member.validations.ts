import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { teamMembers } from "./models/team-member";

export const TeamMemberSchema = createSelectSchema(teamMembers);

export const CreateTeamMemberSchema = createInsertSchema(teamMembers)
      .omit({
            id: true,
            createdAt: true,
            updatedAt: true,
      })
      .extend({
            firstName: z.string().trim().min(1),
            lastName: z.string().trim().min(1),
            slug: z.string().trim().min(1),
            role: z.string().trim().min(1),
            bio: z.string().nullable().optional(),
            profileMediaId: z.string().uuid().nullable().optional(),
            linkedinUrl: z.string().url().nullable().optional(),
            githubUrl: z.string().url().nullable().optional(),
            websiteUrl: z.string().url().nullable().optional(),
            displayOrder: z.number().int().optional(),
            isActive: z.boolean().optional(),
      });

export const UpdateTeamMemberSchema = CreateTeamMemberSchema.partial().refine(
      (data) => Object.keys(data).length > 0,
      "At least one field is required",
);

export type TeamMember = z.infer<typeof TeamMemberSchema>;
export type CreateTeamMemberDTO = z.infer<typeof CreateTeamMemberSchema>;
export type UpdateTeamMemberDTO = z.infer<typeof UpdateTeamMemberSchema>;
