import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favSlice';
import friendReducer from './friendAdd';

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    friends: friendReducer
  },
});
