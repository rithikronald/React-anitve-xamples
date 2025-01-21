import {configureStore} from '@reduxjs/toolkit';
import {CounterReducer} from './Counter/CounterSlice';
import {PostReducer} from './Counter/AsyncSlice';

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    posts: PostReducer,
  },
});
