import { Controller, Get, Query } from '@nestjs/common';

import { CardService } from './card.service';
import { ConfigService } from '@nestjs/config';
import { Card } from './entities/card.entity';

@Controller('/cards')
export class CardController {
  constructor(
    private readonly cardService: CardService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  async findAll(@Query('limit') limit: number) {
    const data = await this.cardService.findCards(limit);
    if (!data || data.length < limit) {
      return await this.createCards(limit, data);
    }

    return data;
  }

  async createCards(limit: number, data: Card[]) {
    const URL = this.configService.get('API_URL');
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-api-key': this.configService.get('API_KEY'),
    });

    const requestOptions = {
      method: 'GET',
      headers: headers,
    };

    const response: Response = await fetch(
      `${URL}size=med&mime_types=jpg&format=json&order=ASC&page=1&limit=${limit}`,
      requestOptions,
    );

    const body = await response.json();

    const newResponse = await body.filter(
      (card: { id: string }) => !data.some((item) => item.imageId === card.id),
    );

    const newCards = await this.cardService.createCards(newResponse);

    data.push(...newCards);

    return data;
  }
}
