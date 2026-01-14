import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DrizzleModule } from './modules/drizzle/drizzle.module';
import { AccommodationsRepositoryModule } from './modules/repositories/accommodations/accommodations-repository.module';
import { AccommodationsModule } from './modules/services/accommodations/accommodations.module';

@Module({
  imports: [DrizzleModule, AccommodationsRepositoryModule, AccommodationsModule],
  controllers: [AppController],
})
export class AppModule {}
