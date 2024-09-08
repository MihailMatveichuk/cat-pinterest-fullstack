import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

type DataType = {
  id: number;
  isLiked: boolean;
  card: {
    id: number;
    imageUrl: string;
    imageId: string;
  };
};

@Injectable()
export class TransformDataInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: DataType[]) => {
        return data.map((item) => ({
          id: item.card.id,
          imageUrl: item.card.imageUrl,
          imageId: item.card.imageId,
          like: {
            id: item.id,
            isLiked: item.isLiked,
          },
        }));
      }),
    );
  }
}
