import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  postsList: []
}

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
};

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  return await getPosts();
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.postsList = action.payload;
    });
  },
});

export default postsSlice.reducer;