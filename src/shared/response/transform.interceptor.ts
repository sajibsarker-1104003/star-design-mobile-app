import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const response = context.switchToHttp().getResponse();
        const statusCode = response.statusCode;

        console.log(data,'dataaaaaaaaaaaa');

        return {
          success: true,
          message: data?.message || 'Request successful',
          data: data?.data !== undefined ? data.data : data,
          statusCode: statusCode,
        };
      }),
    );
  }
}
