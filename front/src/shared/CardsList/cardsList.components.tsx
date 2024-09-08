import { CardType } from '@/type';
import { Card } from '../Card/card.component';

import css from './cardsList.module.css';

export function CardsList({
  cards,
  count,
}: {
  cards: CardType[];
  count: number;
}) {
  return (
    <div className={css.cardsWrapper}>
      {cards
        .map((item) => {
          return <Card key={item.id} src={item.imageUrl} />;
        })
        .slice(0, count)}
    </div>
  );
}
