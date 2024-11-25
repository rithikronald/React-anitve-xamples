import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounteState {
  value: number;
}

const initialState: CounteState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const {decrement, increment} = counterSlice.actions;
