import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/countersSlice';
import favoriteReducer from '../features/favorite/favoritesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    favorite: favoriteReducer
  },
});
