import { useMemo } from 'react';

import { Content } from '@/shared';
import { useFetch } from '@/hooks/useFetch';

import css from './favoritePage.module.css';

export function FavoritePage() {
  const { catCards, isLoading } = useFetch(
    'http://host.docker.internal:3000/api/likes'
  );

  const content = useMemo(
    () => <Content cards={catCards} isLoading={isLoading!} />,
    [catCards]
  );

  return <section className={css.content}>{content}</section>;
}
