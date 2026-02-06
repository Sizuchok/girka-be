import { z } from 'zod';
import { accommodationType } from '../../../../../db/schemas';
import { createZodDto } from 'nestjs-zod';

export const CreateAccommodationSchema = z.object({
  title: z.string().min(3).max(100),
  type: z.enum(accommodationType.enumValues),
  capacity: z.number().int().positive().min(1).max(100),
  price: z.number().int().positive().min(1),
  rating: z.number().min(0).max(5).optional(),
  description: z.string().min(10),
});

export type TCreateAccommodation = z.infer<typeof CreateAccommodationSchema>;

export class CreateAccommodationDto extends createZodDto(CreateAccommodationSchema) {}
