import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    postsList: [],
    isLoading: false,
    errorMessage: ""
  },
  reducers: {
    getPostsFetch: (state) => {
      state.isLoading = true;
    },
    getPostsSuccess: (state, action) => {
      state.postsList = action.payload;
      state.isLoading = false;
    },
    getPostsFailure: (state) => {
      state.isLoading = false;
      state.errorMessage = "Getting User failed!"
    },
  },
});

export const { getPostsFetch, getPostsSuccess, getPostsFailure } = postsSlice.actions;

export default postsSlice.reducer;
