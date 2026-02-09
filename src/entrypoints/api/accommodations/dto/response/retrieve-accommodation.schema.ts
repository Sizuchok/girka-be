import { CommonFieldsSchema } from '../../../common/dto/response/common-fields-response.schema';
import { createZodDto } from 'nestjs-zod';
import z from 'zod';
import { CreateAccommodationSchema } from '../request/create-accommodation.schema';

export const RetrieveAccommodationSchema = z.object({
  ...CommonFieldsSchema.shape,
  title: CreateAccommodationSchema.shape.title,
  type: CreateAccommodationSchema.shape.type,
  capacity: CreateAccommodationSchema.shape.capacity,
  price: CreateAccommodationSchema.shape.price,
  rating: CreateAccommodationSchema.shape.rating.nullable(),
  description: CreateAccommodationSchema.shape.description,
  photos: z.string().array().nullable(),
});

export class RetrieveAccommodationResponseDto extends createZodDto(RetrieveAccommodationSchema) {}
