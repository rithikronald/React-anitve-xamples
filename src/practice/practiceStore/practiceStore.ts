import {configureStore} from '@reduxjs/toolkit';
import {practiceCounterReducer} from './PracticeCounter/PractivceCounterSclice';
import {asyncReducer} from './PracticeCounter/practiceAsyncSlice';

export const practiceStore = configureStore({
  reducer: {
    practiceCounter: practiceCounterReducer,
    practiceAsync: asyncReducer,
  },
});

export type RootState = ReturnType<typeof practiceStore.getState>;
export type AppDispatch = typeof practiceStore.dispatch;
