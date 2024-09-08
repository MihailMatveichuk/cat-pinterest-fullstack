import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { Card } from 'src/card/entities/card.entity';

@Module({
  controllers: [LikesController],
  imports: [TypeOrmModule.forFeature([Like, Card])],
  providers: [LikesService],
})
export class LikesModule {}
