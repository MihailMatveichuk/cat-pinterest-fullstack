import css from './card.module.css';

export function Card({ src }: { src: string }) {
  return (
    <section className={css.cardWrapper}>
      <img src={src} alt="Cat Image" width={225} height={225} />
    </section>
  );
}
