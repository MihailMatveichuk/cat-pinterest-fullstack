import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CardController } from './card.controller';
import { CardService } from './card.service';
import { Card } from './entities/card.entity';

@Module({
  controllers: [CardController],
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [CardService],
  exports: [CardModule],
})
export class CardModule {}
