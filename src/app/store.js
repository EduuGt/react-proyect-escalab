import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/countersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
