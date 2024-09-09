import { CardType } from '@/type';

export const getCards = async (limit: number): Promise<CardType[]> => {
  const result = await fetch(
    `http://host.docker.internal:3000/api/cards?limit=${limit}`
  );

  if (!result) {
    throw new Error('Cards not found');
  }

  return result.json();
};

export const getFavoriteCards = async () => {
  const result = await fetch(`http://host.docker.internal:3000/api/likes`);
  return result.json();
};

export const setFavorite = async (id: number, method: 'POST' | 'DELETE') => {
  await fetch(`http://host.docker.internal:3000/api/likes/${id}`, { method });
};
