import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counter";
import { getPostsFetch } from "./redux/posts";
import './App.css'

export default function App() {
  const { count } = useSelector((state) => state.counter);

  // saga part
  const { postsList, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>Number: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>By Amount</button>

      <br />
      <br />
      <div>
        <button onClick={(() => dispatch(getPostsFetch()))}>
          Get All posts
        </button>
      </div>

      {
        !isLoading ?
        postsList.map(post => {
          return(
            <div>{post.title}</div>
          )
        })
        :
        <h1>Loading</h1>
      }
    </div>
  );
}
