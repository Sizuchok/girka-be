import { Injectable } from '@nestjs/common';
import { AccommodationsRepository } from '../../repositories/accommodations/accommodations.repository';

@Injectable()
export class AccommodationsService {
  constructor(private readonly accommodationsRepository: AccommodationsRepository) {}

  public async createAccommodation() {}

  public async getAccommodationById(id: string) {
    return this.accommodationsRepository.findById(id);
  }
}
