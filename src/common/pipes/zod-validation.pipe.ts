import { PipeTransform, BadRequestException } from '@nestjs/common';
import { createZodValidationPipe } from 'nestjs-zod';
import { ZodError } from 'zod';

export const ZodValidationPipe = createZodValidationPipe({
  createValidationException: (error) => {
    if (!(error instanceof ZodError)) {
      return error as Error;
    }

    return new BadRequestException({
      message: 'Request validation failed.',

      errors: error.errors.map((error) => {
        const field = error.path.join('.');

        return `Field '${field}': ${error.message}`;
      }),
    });
  },
});
