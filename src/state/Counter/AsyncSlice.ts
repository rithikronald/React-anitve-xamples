// src/postsSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// Define async thunk to fetch posts from JSON API
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data; // Return the posts data
});

// Create slice to manage posts state
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    posts: [],
    error: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true; // Set loading to true when the request starts
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false once data is fetched
        state.posts = action.payload; // Assign fetched posts to the state
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false; // Set loading to false in case of error
        state.error = action.error.message; // Store the error message
      });
  },
});

export const PostReducer = postsSlice.reducer;
