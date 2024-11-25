import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'Todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {},
    updatedTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
    getTodo: (state, action) => {},
  },
});

export const todoReducer = todoSlice.reducer;
export const todoAction = todoSlice.actions;
