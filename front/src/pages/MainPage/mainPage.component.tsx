import { useState } from 'react';

import { Content } from '@/shared';
import { useFetch } from '@/hooks/useFetch';

import css from './mainPage.module.css';

const DEFAULT_LIMIT = 15;
const MAX_COUNT = 100;

export const MainPage = () => {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);

  const { catCards, isLoading } = useFetch(
    'http://host.docker.internal:3001/api/cards',
    limit
  );

  const loadMoreCats = () => {
    setLimit((prev) => prev + 5);
  };

  const isButtonVisible = MAX_COUNT > limit;

  const content = (
    <Content
      cards={catCards}
      isLoading={isLoading}
      limit={limit}
      isButtonVisible={isButtonVisible}
      loadMoreCats={loadMoreCats}
    />
  );

  return <section className={css.content}>{content}</section>;
};
