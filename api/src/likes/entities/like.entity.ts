import { Card } from 'src/card/entities/card.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'false' })
  isLiked: boolean;

  @OneToOne(() => Card, (card) => card.like)
  @JoinColumn({ name: 'cat_id' })
  card: Card;
}
