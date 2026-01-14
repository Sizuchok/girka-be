import { Module } from '@nestjs/common';
import { AccommodationsRepository } from './accommodations.repository';

@Module({
  providers: [AccommodationsRepository],
  exports: [AccommodationsRepository],
})
export class AccommodationsRepositoryModule {}
