export const setFavorite = async (id: number, method: 'POST' | 'DELETE') => {
  await fetch(`http://host.docker.internal:3001/api/likes/${id}`, { method });
};
