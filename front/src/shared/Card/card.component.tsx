import { useEffect, useState } from 'react';

import { LikeCheckBox } from '../LikeCheckbox';
import { setFavorite } from '@/api';

import css from './card.module.css';

type Props = {
  info: {
    id: number;
    imageUrl: string;
    like: null | {
      isLiked: boolean;
      id: number;
    };
  };
};

export function Card({ info }: Props) {
  const { id, imageUrl: src, like } = info;
  const isCheckedValue = Boolean(like?.isLiked);
  const [isChecked, isCheckedSet] = useState(isCheckedValue || false);
  const [isHovered, isHoveredSet] = useState(false);

  useEffect(() => {
    isChecked ? setFavorite(id, 'POST') : setFavorite(id, 'DELETE');
  }, [isChecked]);

  const handleChecked = () => {
    isCheckedSet(!isChecked);
  };

  return (
    <section
      className={css.cardWrapper}
      onMouseEnter={() => isHoveredSet(true)}
      onMouseLeave={() => isHoveredSet(false)}
    >
      <img src={src} alt="Cat Image" width={225} height={225} loading="lazy" />
      {isHovered && (
        <LikeCheckBox isChecked={isChecked} onClick={handleChecked} />
      )}
    </section>
  );
}
