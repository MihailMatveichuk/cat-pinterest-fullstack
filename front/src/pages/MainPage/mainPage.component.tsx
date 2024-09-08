import { useEffect, useMemo, useState } from 'react';

import { Content } from '@/shared';
import { getCards } from '@/api';
import { CardType } from '@/type';

import css from './mainPage.module.css';

const DEFAULT_LIMIT = 15;
const MAX_COUNT = 100;

export const MainPage = () => {
  const [cards, setCardsItem] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);

  useEffect(() => {
    const handleCards = async () => {
      setIsLoading(true);
      try {
        const cards = await getCards(limit);

        setCardsItem(cards);
      } catch (error) {
        throw new Error('Error on get cards');
      } finally {
        setIsLoading(false);
      }
    };

    handleCards();

    return () => {};
  }, [limit]);

  const loadMoreCats = () => {
    setLimit((prev) => prev + 5);
  };

  const isButtonVisible = MAX_COUNT > limit;

  const content = useMemo(
    () => (
      <Content
        cards={cards}
        isLoading={isLoading}
        limit={limit}
        isButtonVisible={isButtonVisible}
        loadMoreCats={loadMoreCats}
      />
    ),
    [cards, limit]
  );

  return <section className={css.content}>{content}</section>;
};
