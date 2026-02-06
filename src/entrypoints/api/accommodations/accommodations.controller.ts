import { Body, Controller, Post } from '@nestjs/common';
import { AccommodationsService } from '../../../modules/services/accommodations/accommodations.service';
import { CreateAccommodationDto } from './dto/request/create-accommodation.schema';

@Controller('accommodations')
export class AccommodationsController {
  constructor(private readonly accommodationsService: AccommodationsService) {}

  @Post()
  public createAccommodation(@Body() body: CreateAccommodationDto) {
    console.log(body);
  }
}
