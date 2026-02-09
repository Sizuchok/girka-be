import { Injectable, NotFoundException } from '@nestjs/common';
import { AccommodationsRepository } from '../../repositories/accommodations/accommodations.repository';
import { CreateAccommodation } from '../../../entrypoints/api/accommodations/dto/request/create-accommodation.schema';

@Injectable()
export class AccommodationsService {
  constructor(private readonly accommodationsRepository: AccommodationsRepository) {}

  public createAccommodation(payload: CreateAccommodation) {
    return this.accommodationsRepository.createAccommodation(payload);
  }

  public async retrieveAccommodation(id: string) {
    const accommodation = await this.accommodationsRepository.retrieveAccommodation(id);

    if (!accommodation) {
      throw new NotFoundException('Accommodation not found.');
    }

    return accommodation;
  }
}
