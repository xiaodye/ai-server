import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class httpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    // 拿到ctx对象
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    response.status(status).json({
      code: status,
      success: false,
      data: {
        requestQuery: request.query,
        requestParam: request.params,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        requestBody: request.body,
      },
      time: new Date().getTime(),
      url: request.url,
    });
  }
}
