import { boolean, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const admins = pgTable("admins", {
      id: uuid("id").defaultRandom().primaryKey(),
      email: varchar("email", { length: 255 }).notNull().unique(),
      passwordHash: varchar("password_hash", { length: 255 }).notNull(),
      firstName: varchar("first_name", { length: 100 }).notNull(),
      lastName: varchar("last_name", { length: 100 }).notNull(),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
