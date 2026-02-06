import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DrizzleModule } from './common/modules/drizzle/drizzle.module';
import { AccommodationsRepositoryModule } from './modules/repositories/accommodations/accommodations-repository.module';
import { AccommodationsModule } from './modules/services/accommodations/accommodations.module';
import { AccommodationsController } from './entrypoints/api/accommodations/accommodations.controller';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ZodSerializerInterceptor } from 'nestjs-zod';
import { ZodValidationPipe } from './common/pipes/zod-validation.pipe';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

@Module({
  imports: [DrizzleModule, AccommodationsRepositoryModule, AccommodationsModule],
  controllers: [AppController, AccommodationsController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ZodSerializerInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
