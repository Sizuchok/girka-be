import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpExceptionBody,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse() as HttpExceptionBody | Record<string, string>;

    const messageObj = exceptionResponse?.statusCode
      ? { message: exceptionResponse.message }
      : exceptionResponse;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date(),
      ...messageObj,
    });
  }
}
