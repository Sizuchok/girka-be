import { createZodDto } from 'nestjs-zod';
import { CommonFieldsSchema } from '../response/common-fields-response.schema';

export class EntityIdPathDto extends createZodDto(
  CommonFieldsSchema.pick({
    id: true,
  }),
) {}
