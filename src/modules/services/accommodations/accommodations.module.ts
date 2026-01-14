import { Module } from '@nestjs/common';
import { AccommodationsService } from './accommodations.service';
import { AccommodationsRepositoryModule } from '../../repositories/accommodations/accommodations-repository.module';

@Module({
  providers: [AccommodationsService],
  exports: [AccommodationsService],
  imports: [AccommodationsRepositoryModule],
})
export class AccommodationsModule {}
