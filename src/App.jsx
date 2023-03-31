import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counter";
import { fetchPosts } from "./redux/posts";
import './App.css'

export default function App() {
  const { count } = useSelector((state) => state.counter);

  // saga part
  const { postsList } = useSelector((state) => state.posts);
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
        <button onClick={(() => dispatch(fetchPosts()))}>
          Get All posts
        </button>
      </div>

      {
        postsList.length > 0 && postsList.map(post => {
          return(
            <div key={post.id}>{post.title}</div>
          )
        })
      }
    </div>
  );
}
