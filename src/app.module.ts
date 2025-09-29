import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { DrizzleModule } from './modules/drizzle/drizzle.module';

@Module({
  imports: [ConfigModule, DrizzleModule],
  controllers: [AppController],
})
export class AppModule {}
