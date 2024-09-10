import { CardType } from '@/type';
import { createSlice } from '@reduxjs/toolkit';

const SLICE_NAME = 'cards';

export interface languageStore {
  cards: CardType[];
}

const initialState: languageStore = {
  cards: [],
};

export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    createAllCards(state, action) {
      state.cards = action.payload;
    },
    deleteCardById(state, action) {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

export default reducer;

export const { createAllCards, deleteCardById } = actions;
