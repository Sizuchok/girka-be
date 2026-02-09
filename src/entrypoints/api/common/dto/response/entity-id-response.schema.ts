import { createZodDto } from 'nestjs-zod';
import { CommonFieldsSchema } from './common-fields-response.schema';

export class EntityIdResponseDto extends createZodDto(
  CommonFieldsSchema.pick({
    id: true,
  }),
) {}
