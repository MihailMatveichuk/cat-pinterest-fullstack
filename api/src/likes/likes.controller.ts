import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LikesService } from './likes.service';
import { Like } from './entities/like.entity';
import { DeleteResult } from 'typeorm';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Get()
  getAllLikes(): Promise<Like[]> {
    return this.likesService.getAllLikes();
  }

  @Post(':cat_id')
  createLike(@Param('cat_id') cat_id: number) {
    return this.likesService.createLike(cat_id);
  }

  @Delete(':cat_id')
  deleteLike(@Param('cat_id') cat_id: number): Promise<DeleteResult> {
    return this.likesService.deleteLike(cat_id);
  }
}
