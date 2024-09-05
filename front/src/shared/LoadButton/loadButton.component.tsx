import css from './loadButton.module.css';

export function LoadButton({ loadMoreCats }: { loadMoreCats: () => void }) {
  return (
    <button className={css.loadMoreCatsButton} onClick={loadMoreCats}>
      ... загружаем еще котиков ...
    </button>
  );
}
