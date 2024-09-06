import { useState } from 'react';

import { LikeCheckBox } from '../LikeCheckbox';

import css from './card.module.css';

export function Card({ src }: { src: string }) {
  const [isChecked, isCheckedSet] = useState(false);
  const [isHovered, isHoveredSet] = useState(false);

  const handleMouseEnter = () => {
    isHoveredSet(true);
  };
  const handleMouseLeave = () => {
    isHoveredSet(false);
  };
  const handleChecked = () => {
    isCheckedSet(!isChecked);
  };
  return (
    <section className={css.cardWrapper}>
      <img src={src} alt="Cat Image" width={225} height={225} />
      <LikeCheckBox
        isChecked={isChecked}
        isHovered={isHovered}
        onClick={handleChecked}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </section>
  );
}
