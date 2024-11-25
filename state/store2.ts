import {configureStore} from '@reduxjs/toolkit';
import {todoReducer} from './todo/todoslice';

export const store2 = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
f