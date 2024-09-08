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

  async createCards(cards: { id: string; url: string }[]): Promise<void> {
    const existedCards = await this.cardRepository.find();
    cards.map(({ url, id }) => {
      if (!existedCards.some((card) => card.imageId === id)) {
        this.cardRepository.save({ imageUrl: url, imageId: id });
      }
      return;
    });
  }

  async findCards(limit: number): Promise<Card[]> {
    return this.cardRepository.find({
      relations: ['like'],
      take: limit,
    });
  }
}
