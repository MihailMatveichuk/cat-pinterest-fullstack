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

  async createCards(cards: { url: string }[]): Promise<void> {
    cards.map(({ url }) => {
      return this.cardRepository.save({ imageUrl: url });
    });
  }

  async findAllCards(): Promise<Card[]> {
    return this.cardRepository.find({
      relations: ['like'],
    });
  }
}
