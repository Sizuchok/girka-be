import 'dotenv/config';
import { Module } from '@nestjs/common';
import { DbConfigService } from './db/db-config.service';
import { dbConfigParsed } from './db/db-config.schema';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: DbConfigService,
      useFactory: () => {
        return new DbConfigService(dbConfigParsed);
      },
    },
  ],
  exports: [DbConfigService],
})
export class ConfigModule {}
