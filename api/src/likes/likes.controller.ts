import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { LikesService } from './likes.service';
import { DeleteResult } from 'typeorm';
import { TransformDataInterceptor } from 'src/interceptors/transform.interceptor';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Get()
  @UseInterceptors(new TransformDataInterceptor())
  async getFavoriteCards() {
    return await this.likesService.getFavoriteCardsByLikes();
  }

  @Post(':cat_id')
  async createLike(@Param('cat_id') cat_id: number) {
    return await this.likesService.createLike(cat_id);
  }

  @Delete(':cat_id')
  deleteLike(@Param('cat_id') cat_id: number): Promise<DeleteResult> {
    return this.likesService.deleteLike(cat_id);
  }
}
