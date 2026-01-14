import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { dbConfig } from '../configs/db.config';
import { join } from 'path';

export const runMigrations = async () => {
  await migrate(
    drizzle({
      connection: {
        connectionString: dbConfig.DB_URL,
      },
    }),
    {
      migrationsFolder: join(process.cwd(), 'src/db/migrations'),
    },
  );
};
