import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const CommonFieldsSchema = z.object({
  id: z.uuid().meta({
    description: 'Unique identifier of the entity.',
  }),
  createdAt: z.iso.datetime().meta({
    description: 'Timestamp when the entity was created.',
    example: '2026-02-09T21:21:47.418Z',
  }),
  updatedAt: z.iso.datetime().meta({
    description: "Timestamp of the entity's most recent update.",
    example: '2026-02-09T21:21:47.418Z',
  }),
});

export class CommonFieldsResponseDto extends createZodDto(CommonFieldsSchema) {}
