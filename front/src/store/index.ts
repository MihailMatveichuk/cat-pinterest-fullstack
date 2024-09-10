import { configureStore } from '@reduxjs/toolkit';
import { reducer as cardsReducer } from './slice';

export const store = configureStore({
  reducer: cardsReducer,
});

export type RootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
