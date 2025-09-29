import { Module } from '@nestjs/common';
import { ConfigModule } from '../../config/config.module';
import { DbConfigService } from '../../config/db/db-config.service';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '../../db/schemas';
import { IN_TOKEN } from '../../common/const';

@Module({
  providers: [
    {
      provide: IN_TOKEN.DRIZZLE,
      useFactory: (dbConfig: DbConfigService) => {
        const db = drizzle({
          connection: {
            connectionString: dbConfig.dbUrl,
          },
          schema,
        });

        return db;
      },
      inject: [DbConfigService],
    },
  ],
  imports: [ConfigModule],
  exports: [IN_TOKEN.DRIZZLE],
})
export class DrizzleModule {}
