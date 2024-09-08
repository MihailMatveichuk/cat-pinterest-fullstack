import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { DeleteResult, Repository } from 'typeorm';
import { Card } from 'src/card/entities/card.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  getAllLikes(): Promise<Like[]> {
    return this.likeRepository.find();
  }

  async createLike(cat_id: number) {
    const newLike = this.likeRepository.create();
    const card = await this.cardRepository.findOneBy({ id: cat_id });
    return this.likeRepository.save({
      ...newLike,
      isLiked: true,
      card,
    });
  }

  deleteLike(cat_id: number): Promise<DeleteResult> {
    return this.likeRepository.delete({ card: { id: cat_id } });
  }
}
