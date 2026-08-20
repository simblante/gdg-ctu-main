import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { admins } from "./models/admin";

export const AdminRecordSchema = createSelectSchema(admins);

export const AdminSchema = AdminRecordSchema.omit({
      passwordHash: true,
});

export const CreateAdminSchema = createInsertSchema(admins)
      .omit({
            id: true,
            createdAt: true,
            updatedAt: true,
      })
      .extend({
            email: z.string().email().trim().toLowerCase(),
            passwordHash: z.string().min(20),
            firstName: z.string().trim().min(1),
            lastName: z.string().trim().min(1),
            isActive: z.boolean().optional(),
      });

export const UpdateAdminSchema = CreateAdminSchema.partial().refine(
      (data) => Object.keys(data).length > 0,
      "At least one field is required",
);

export type AdminRecord = z.infer<typeof AdminRecordSchema>;
export type Admin = z.infer<typeof AdminSchema>;
export type CreateAdminDTO = z.infer<typeof CreateAdminSchema>;
export type UpdateAdminDTO = z.infer<typeof UpdateAdminSchema>;
