import { call, put, takeEvery } from 'redux-saga/effects';
import { getPostsSuccess } from './posts';

function* workGetPostsFetch() {
  const posts = yield call(() => fetch('https://jsonplaceholder.typicode.com/posts'));
  const formattedPosts = yield posts.json();
  const firstTenPosts = formattedPosts.slice(0,10)
  yield put(getPostsSuccess(firstTenPosts));
}

function* postsSaga() {
  yield takeEvery('posts/getPostsFetch', workGetPostsFetch)
}

export default postsSaga