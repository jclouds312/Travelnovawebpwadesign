import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Users table
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  avatarUrl: text("avatar_url"),
  role: text("role").default("user"),
});

export const usersRelations = relations(users, ({ many }) => ({
  projects: many(projects),
  prompts: many(prompts),
}));

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Projects table
export const projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  userId: varchar("user_id").notNull().references(() => users.id),
  figmaFileId: text("figma_file_id"),
  status: text("status").default("draft"),
  thumbnailUrl: text("thumbnail_url"),
  designTokens: jsonb("design_tokens"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const projectsRelations = relations(projects, ({ one, many }) => ({
  user: one(users, {
    fields: [projects.userId],
    references: [users.id],
  }),
  assets: many(assets),
  figmaFrames: many(figmaFrames),
}));

export const insertProjectSchema = createInsertSchema(projects).pick({
  name: true,
  description: true,
  figmaFileId: true,
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

// Assets table (generated images)
export const assets = pgTable("assets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  projectId: varchar("project_id").notNull().references(() => projects.id),
  name: text("name").notNull(),
  prompt: text("prompt").notNull(),
  style: text("style").default("modern"),
  size: text("size").default("1024x1024"),
  url: text("url").notNull(),
  provider: text("provider").default("openai"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const assetsRelations = relations(assets, ({ one }) => ({
  project: one(projects, {
    fields: [assets.projectId],
    references: [projects.id],
  }),
}));

export const insertAssetSchema = createInsertSchema(assets).pick({
  projectId: true,
  name: true,
  prompt: true,
  style: true,
  size: true,
});

export type InsertAsset = z.infer<typeof insertAssetSchema>;
export type Asset = typeof assets.$inferSelect;

// Prompts library
export const prompts = pgTable("prompts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  title: text("title").notNull(),
  content: text("content").notNull(),
  category: text("category").default("ui"),
  tags: text("tags").array(),
  isPublic: boolean("is_public").default(false),
  usageCount: integer("usage_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const promptsRelations = relations(prompts, ({ one }) => ({
  user: one(users, {
    fields: [prompts.userId],
    references: [users.id],
  }),
}));

export const insertPromptSchema = createInsertSchema(prompts).pick({
  title: true,
  content: true,
  category: true,
  tags: true,
  isPublic: true,
});

export type InsertPrompt = z.infer<typeof insertPromptSchema>;
export type Prompt = typeof prompts.$inferSelect;

// Figma Frames table
export const figmaFrames = pgTable("figma_frames", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  projectId: varchar("project_id").notNull().references(() => projects.id),
  frameId: text("frame_id").notNull(),
  name: text("name").notNull(),
  pageName: text("page_name").notNull(),
  componentName: text("component_name"),
  reactPath: text("react_path"),
  apiCalls: text("api_calls").array(),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const figmaFramesRelations = relations(figmaFrames, ({ one }) => ({
  project: one(projects, {
    fields: [figmaFrames.projectId],
    references: [projects.id],
  }),
}));

export const insertFigmaFrameSchema = createInsertSchema(figmaFrames).pick({
  projectId: true,
  frameId: true,
  name: true,
  pageName: true,
  componentName: true,
  reactPath: true,
  apiCalls: true,
});

export type InsertFigmaFrame = z.infer<typeof insertFigmaFrameSchema>;
export type FigmaFrame = typeof figmaFrames.$inferSelect;

// NoCode Exports table
export const nocodeExports = pgTable("nocode_exports", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  projectId: varchar("project_id").notNull().references(() => projects.id),
  platform: text("platform").notNull(), // bubble, flutterflow, weweb, appsmith
  fileName: text("file_name").notNull(),
  downloadUrl: text("download_url"),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const nocodeExportsRelations = relations(nocodeExports, ({ one }) => ({
  project: one(projects, {
    fields: [nocodeExports.projectId],
    references: [projects.id],
  }),
}));

export const insertNocodeExportSchema = createInsertSchema(nocodeExports).pick({
  projectId: true,
  platform: true,
});

export type InsertNocodeExport = z.infer<typeof insertNocodeExportSchema>;
export type NocodeExport = typeof nocodeExports.$inferSelect;

// Design tokens schema for export
export const designTokensSchema = z.object({
  colors: z.object({
    primary: z.string(),
    secondary: z.string(),
    accent: z.string(),
    background: z.string(),
    foreground: z.string(),
    muted: z.string(),
    destructive: z.string(),
  }),
  typography: z.object({
    fontFamily: z.object({
      sans: z.string(),
      serif: z.string(),
      mono: z.string(),
    }),
    fontSize: z.object({
      xs: z.string(),
      sm: z.string(),
      base: z.string(),
      lg: z.string(),
      xl: z.string(),
      "2xl": z.string(),
      "3xl": z.string(),
      "4xl": z.string(),
    }),
  }),
  spacing: z.object({
    "0": z.string(),
    "1": z.string(),
    "2": z.string(),
    "3": z.string(),
    "4": z.string(),
    "6": z.string(),
    "8": z.string(),
    "12": z.string(),
    "16": z.string(),
    "24": z.string(),
  }),
  borderRadius: z.object({
    sm: z.string(),
    md: z.string(),
    lg: z.string(),
    full: z.string(),
  }),
});

export type DesignTokens = z.infer<typeof designTokensSchema>;
