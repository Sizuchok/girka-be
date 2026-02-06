import { Injectable } from '@nestjs/common';
import { AccommodationsRepository } from '../../repositories/accommodations/accommodations.repository';
import { TCreateAccommodation } from '../../../entrypoints/api/accommodations/dto/request/create-accommodation.schema';

@Injectable()
export class AccommodationsService {
  constructor(private readonly accommodationsRepository: AccommodationsRepository) {}

  public async createAccommodation(payload: TCreateAccommodation) {}
}
