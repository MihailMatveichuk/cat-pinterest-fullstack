import { CardItem } from '@/pages/MainPage/mainPage.component';

import { Card } from '../Card/card.component';

import css from './cardsList.module.css';

export function CardsList({
  cards,
  count,
}: {
  cards: CardItem[];
  count: number;
}) {
  return (
    <div className={css.cardsWrapper}>
      {cards
        .map((item) => {
          return <Card key={item.id} src={item.src} />;
        })
        .slice(0, count)}
    </div>
  );
}
