import { useEffect, useState } from 'react';

import { LikeCheckBox } from '../LikeCheckbox';
import { setFavorite } from '@/api';
import { CardType } from '@/type';

import css from './card.module.css';

export function Card({ info }: { info: CardType }) {
  const { id, imageUrl: src, like } = info;
  const isCheckedValue = Boolean(like?.isLiked);
  const [isChecked, isCheckedSet] = useState(isCheckedValue || false);
  const [isHovered, isHoveredSet] = useState(false);

  useEffect(() => {
    if (isChecked) {
      setFavorite(id, 'POST');
    } else {
      setFavorite(id, 'DELETE');
    }
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
