export type LikeType = {
  id: number;
  isLiked: boolean;
};

export type CardType = {
  id: number;
  imageUrl: string;
  like: LikeType;
};
