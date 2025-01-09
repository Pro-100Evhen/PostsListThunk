import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (type) => {
   const response = await axios.get(`${API_URL}${type}?_limit=10`);
   return response.data;
});

const initialState = {
   dataType: "users", // posts || users || comments
   posts: [],
   status: "idle", // idle | loading | succeeded | failed
   error: null,
};

export const postsSlice = createSlice({
   name: "posts",
   initialState: initialState,
   reducers: {
      changeDataType(state, action) {
         state.dataType = action.payload;
      },
      cleareDataType(state) {
         // state.dataType = "";
         state.posts = [];
         state.status = "idle";
      },
   },
   extraReducers(builder) {
      builder
         .addCase(fetchPosts.pending, (state) => {
            state.status = "loading";
         })
         .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.posts = [...state.posts, ...action.payload];
         })
         .addCase(fetchPosts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
         });
   },
});

export const { changeDataType, cleareDataType } = postsSlice.actions;
export const postsSelector = (state) => state.posts.posts;

export const postsReducer = postsSlice.reducer;
