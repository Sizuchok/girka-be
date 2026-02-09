import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccommodationsService } from '../../../modules/services/accommodations/accommodations.service';
import { CreateAccommodationDto } from './dto/request/create-accommodation.schema';
import { ZodResponse } from 'nestjs-zod';
import { EntityIdResponseDto } from '../common/dto/response/entity-id-response.schema';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { EntityIdPathDto } from '../common/dto/request/entity-id-path.dto';
import { RetrieveAccommodationResponseDto } from './dto/response/retrieve-accommodation.schema';

@ApiTags('Accommodations')
@Controller('accommodations')
export class AccommodationsController {
  constructor(private readonly accommodationsService: AccommodationsService) {}

  @ZodResponse({
    type: EntityIdResponseDto,
  })
  @ApiOperation({
    summary: 'Create an Accommodation',
  })
  @Post()
  public createAccommodation(@Body() body: CreateAccommodationDto) {
    return this.accommodationsService.createAccommodation(body);
  }

  @ZodResponse({
    type: RetrieveAccommodationResponseDto,
  })
  @ApiOperation({
    summary: 'Retrieve an Accommodation',
  })
  @Get(':id')
  public retrieveAccommodation(@Param() params: EntityIdPathDto) {
    return this.accommodationsService.retrieveAccommodation(params.id);
  }
}
