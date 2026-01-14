import { z } from 'zod';

enum ContextEnv {
  Local = 'local',
  Development = 'development',
  Production = 'production',
}

export const ApiConfigSchema = z.object({
  ENV: z.enum([ContextEnv.Local, ContextEnv.Development, ContextEnv.Production]),
});

export type ApiConfig = z.infer<typeof ApiConfigSchema>;

const parsed = ApiConfigSchema.parse(process.env);

export const apiConfig = {
  ...parsed,
  isRemoteEnv: parsed.ENV !== ContextEnv.Local,
};
