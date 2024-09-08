import { Like } from 'src/likes/entities/like.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imageUrl: string;

  @Column({ unique: true })
  imageId: string;

  @OneToOne(() => Like, (like) => like.card)
  like: Like;
}
