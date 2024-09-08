import { CardType } from '@/type';
import { CardsList } from '../CardsList';
import { LoadButton } from '../LoadButton';
import { Loader } from '../Loader';

import css from './content.module.css';

type Props = {
  cards: CardType[];
  isLoading: boolean;
  isButtonVisible?: boolean;
  limit?: number;
  loadMoreCats?: () => void;
};
export function Content({
  cards,
  isLoading,
  limit,
  isButtonVisible,
  loadMoreCats,
}: Props) {
  return (
    <div className={css.cardsContainer}>
      {cards.length == 0 && !isLoading && <div>Cards not found</div>}
      {isLoading ? <Loader /> : <CardsList cards={cards} count={limit} />}
      {isButtonVisible && !isLoading && (
        <LoadButton loadMoreCats={loadMoreCats!} />
      )}
    </div>
  );
}
