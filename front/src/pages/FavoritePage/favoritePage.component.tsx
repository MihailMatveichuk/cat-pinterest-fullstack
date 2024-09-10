import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Content } from '@/shared';
import { useFetch } from '@/hooks/useFetch';
import { createAllCards } from '@/store/slice';
import { RootStore } from '@/store';

import css from './favoritePage.module.css';

export function FavoritePage() {
  const { catCards, isLoading } = useFetch(
    'http://host.docker.internal:3001/api/likes'
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createAllCards(catCards));
  }, [catCards]);

  const cards = useSelector((state: RootStore) => state.cards);

  return (
    <section className={css.content}>
      <Content
        cards={cards || []}
        isLoading={isLoading!}
        limit={catCards.length}
        isButtonVisible={false}
      />
    </section>
  );
}
