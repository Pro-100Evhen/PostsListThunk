import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=12";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
   const response = await axios.get(API_URL);
   return response.data;
});

const initialState = {
   posts: [
      { id: -1, title: "Post 1", body: "This is post 1" },
      { id: 0, title: "Post 2", body: "This is post 2" },
   ],
   status: "idle", // idle | loading | succeeded | failed
   error: null,
};

export const postsSlice = createSlice({
   name: "posts",
   initialState: initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(fetchPosts.pending, (state) => {
            state.status = "loading";
         })
         .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.posts = [...state.posts, ...action.payload];
            console.log(action.payload);
         })
         .addCase(fetchPosts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
         });
   },
});

export const postsSelector = (state) => state.posts.posts;

export const postsReducer = postsSlice.reducer;
