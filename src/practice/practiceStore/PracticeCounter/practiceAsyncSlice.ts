import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
  'practiceAsync/fetchUser',
  async (userId: string) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    return response.data;
  },
);

const practiceAsyncSlice = createSlice({
  initialState: {data: null, loading: false, error: null},
  reducers: {},
  name: 'practiceAsync',
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const asyncReducer = practiceAsyncSlice.reducer;
