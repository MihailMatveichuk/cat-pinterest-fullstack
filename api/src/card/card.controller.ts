import { Controller, Get, Query } from '@nestjs/common';

import { CardService } from './card.service';
import { ConfigService } from '@nestjs/config';

@Controller('/cards')
export class CardController {
  constructor(
    private readonly cardService: CardService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  async findAll(@Query('limit') limit: string) {
    const URL = this.configService.get('API_URL');
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-api-key': this.configService.get('API_KEY'),
    });

    const requestOptions = {
      method: 'GET',
      headers: headers,
    };

    const response = await fetch(
      `${URL}size=med&mime_types=jpg&format=json&order=ASC&page=1&limit=${limit}`,
      requestOptions,
    ).then((response: Response) => response.json());

    await this.cardService.createCards(response);

    return this.cardService.findAllCards();
  }
}
