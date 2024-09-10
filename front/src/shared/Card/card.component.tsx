import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { LikeCheckBox } from '../LikeCheckbox';
import { setFavorite } from '@/api';
import { CardType } from '@/type';
import { deleteCardById } from '@/store/slice';

import css from './card.module.css';

export function Card({ info }: { info: CardType }) {
  const { id, imageUrl: src, like } = info;
  const isCheckedValue = Boolean(like?.isLiked);
  const [isChecked, isCheckedSet] = useState(isCheckedValue || false);
  const [isHovered, isHoveredSet] = useState(false);
  const dispatch = useDispatch();

  const handleChecked = () => {
    isCheckedSet(!isChecked);
    if (!isChecked) {
      setFavorite(id, 'POST');
    } else {
      setFavorite(id, 'DELETE');
      dispatch(deleteCardById(id));
    }
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
