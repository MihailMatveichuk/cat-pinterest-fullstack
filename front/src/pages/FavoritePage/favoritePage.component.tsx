import { useEffect, useMemo, useState } from 'react';

import { CardType } from '@/type';
import { getFavoriteCards } from '@/api';
import { Content } from '@/shared';

import css from './favoritePage.module.css';

export function FavoritePage() {
  const [favoriteCards, setFavoriteCards] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleCards = async () => {
      setIsLoading(true);
      try {
        const cards = await getFavoriteCards();
        setFavoriteCards(cards);
      } catch (error) {
        throw new Error('Error on get cards');
      } finally {
        setIsLoading(false);
      }
    };
    handleCards();
  }, []);

  const content = useMemo(
    () => <Content cards={favoriteCards} isLoading={isLoading!} />,
    [favoriteCards]
  );

  return <section className={css.content}>{content}</section>;
}
