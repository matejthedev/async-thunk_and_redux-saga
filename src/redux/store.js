import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import counterSlice from "./counter";
import postsSlice from "./posts";
import postsSaga from "./postsSaga";

const saga = createSagaMiddleware()

export default configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
  },
  middleware: [saga]
});

saga.run(postsSaga);