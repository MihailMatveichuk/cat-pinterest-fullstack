import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  src: string;

  @Column()
  isChecked: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
