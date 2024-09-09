import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async createCards(cards: { id: string; url: string }[]): Promise<Card[]> {
    const cardsPromises = cards.map(({ url, id }) => {
      return this.cardRepository.save({ imageUrl: url, imageId: id });
    });

    return await Promise.all(cardsPromises);
  }

  async findCards(limit: number): Promise<Card[]> {
    return await this.cardRepository.find({
      relations: ['like'],
      take: limit,
    });
  }
}
