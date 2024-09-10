import { useEffect, useState } from 'react';

import { CardType } from '@/type';

export function useFetch(url: string, limit?: number) {
  const [catCards, setCardsItem] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
  }, [url, limit]);

  return { catCards, isLoading };
}
