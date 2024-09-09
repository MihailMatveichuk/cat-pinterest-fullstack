import { Content } from '@/shared';
import { useFetch } from '@/hooks/useFetch';
import { useMemo } from 'react';

import css from './favoritePage.module.css';

export function FavoritePage() {
  const { catCards, isLoading } = useFetch(
    'http://host.docker.internal:3000/api/likes'
  );

  const content = useMemo(() => {
    return (
      <Content
        cards={catCards}
        isLoading={isLoading!}
        limit={catCards.length}
        isButtonVisible={false}
      />
    );
  }, [catCards]);

  return <section className={css.content}>{content}</section>;
}
