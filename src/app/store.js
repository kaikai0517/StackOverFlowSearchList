import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from '../features/tagsSlice';
import searchSlice from '../features/searchSlice';

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
    search: searchSlice
  },
});
