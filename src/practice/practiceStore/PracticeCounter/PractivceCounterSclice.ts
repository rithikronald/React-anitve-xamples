import {createSlice} from '@reduxjs/toolkit';

const PracticeCounterSlice = createSlice({
  initialState: {count: 0},
  name: 'PracticeCounter',
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const {decrement, increment, incrementByAmount} =
  PracticeCounterSlice.actions;
export const practiceCounterReducer = PracticeCounterSlice.reducer;
