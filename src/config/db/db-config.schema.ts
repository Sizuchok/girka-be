import { z } from 'zod';

export const DbConfigSchema = z.object({
  DB_URL: z.string().url(),
});

export type DbConfig = z.infer<typeof DbConfigSchema>;

export const dbConfigParsed = DbConfigSchema.parse(process.env);
