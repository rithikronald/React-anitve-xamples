import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};
const CounterSlice = createSlice({
  initialState,
  name: 'Counter',
  reducers: {
    increment: (state, action) => {
      const val = action.payload || 1;
      state.value += val;
    },
  },
});

export const CounterReducer = CounterSlice.reducer;
export const {increment} = CounterSlice.actions;
