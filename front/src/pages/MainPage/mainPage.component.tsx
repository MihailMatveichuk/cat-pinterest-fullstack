import { useEffect, useMemo, useState } from 'react';

import { cardItems } from '@/mock';
import { Loader } from '@/shared/Loader';
import { LoadButton } from '@/shared/LoadButton';
import { CardsList } from '@/shared/CardsList';

import css from './mainPage.module.css';

export type CardItem = {
  id: string;
  src: string;
  isFavorite: boolean;
};

export const MainPage = () => {
  const [cards, setCardsItem] = useState<CardItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(5);

  useEffect(() => {
    const id = setTimeout(() => {
      setCardsItem(cardItems);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(id);
  }, []);

  const loadMoreCats = () => {
    setCount((prev) => prev + 5);
  };

  const isButtonVisible = cards.length > count;

  const content = useMemo(() => {
    return (
      <div className={css.cardsContainer}>
        {isLoading ? <Loader /> : <CardsList cards={cards} count={count} />}
        {isButtonVisible && <LoadButton loadMoreCats={loadMoreCats} />}
      </div>
    );
  }, [cards, count]);

  return <section className={css.content}>{content}</section>;
};
