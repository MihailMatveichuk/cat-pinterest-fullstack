import { useState } from 'react';

import { LikeCheckBox } from '../LikeCheckbox';

import css from './card.module.css';

export function Card({ src }: { src: string }) {
  const [isChecked, isCheckedSet] = useState(false);
  const [isHovered, isHoveredSet] = useState(false);

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
