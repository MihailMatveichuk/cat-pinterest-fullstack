import { CardType } from '@/type';

export const getCards = async (limit: number): Promise<CardType[]> => {
  const result = await fetch(`http://localhost:3000/api/cards?limit=${limit}`);
  if (!result) {
    throw new Error('Cards not found');
  }

  return result.json();
};
