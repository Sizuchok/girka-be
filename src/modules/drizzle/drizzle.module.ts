import { Global, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '../../db/schemas';
import { dbConfig } from '../../configs/db.config';
import { injectionToken } from '../../common/helpers/injection-token.helper';

@Global()
@Module({
  providers: [
    {
      provide: injectionToken.drizzle,
      useFactory: () => {
        const db = drizzle({
          connection: {
            connectionString: dbConfig.DB_URL,
          },
          schema,
          logger: true,
        });

        return db;
      },
    },
  ],
  exports: [injectionToken.drizzle],
})
export class DrizzleModule {}
