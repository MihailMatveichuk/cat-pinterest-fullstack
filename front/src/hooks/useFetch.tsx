import { useEffect, useState } from 'react';

import { CardType } from '@/type';
import { useLocation } from 'react-router-dom';

export function useFetch(url: string, limit?: number) {
  const [catCards, setCardsItem] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  const dependencies =
    pathname === '/favorite' ? [url, catCards] : [url, limit];

  useEffect(() => {
    const handleCards = async () => {
      setIsLoading(true);
      try {
        const cards = await fetch(`${url}?limit=${limit}`).then((res) =>
          res.json()
        );
        setCardsItem(cards);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw new Error('Error on get cards');
      }
    };
    handleCards();
  }, dependencies);

  return { catCards, isLoading };
}
