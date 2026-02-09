import { z } from 'zod';
import { accommodationType } from '../../../../../db/schemas';
import { createZodDto } from 'nestjs-zod';

export const CreateAccommodationSchema = z.object({
  title: z.string().min(3).max(100).meta({
    example: '4-person cabin',
  }),
  type: z.enum(accommodationType.enumValues),
  capacity: z.number().int().positive().min(1).max(100),
  price: z.number().int().positive().min(1),
  rating: z.number().min(0).max(5).optional(),
  description: z.string().min(10).meta({
    example: 'This is a nice cabin.',
  }),
});

export type CreateAccommodation = z.infer<typeof CreateAccommodationSchema>;

export class CreateAccommodationDto extends createZodDto(CreateAccommodationSchema) {}
