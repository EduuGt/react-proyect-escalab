import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../features/favorite/favoritesSlice';

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer
  },
});
