import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoriteChampions: []
};

export const favoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    add: (state, action) => {
        state.favoriteChampions.push(action.payload);
    },
    remove: (state, action) => {
      state.favoriteChampions = state.favoriteChampions.filter(
        (champion) => champion.id !== action.payload
      )
    },
    
  }
});

export const { add, remove } = favoritesSlice.actions;

export const selectChampion = (state) => state.favorite.favoriteChampions;

export default favoritesSlice.reducer;
