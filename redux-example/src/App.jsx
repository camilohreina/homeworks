import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/counterSlice';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementBy = (count) => {
    dispatch(increment(count));
  };

  return (
    <>
      <h1>App</h1>
      <hr />
      <span>Counter is: {counter} </span>
      <button
        onClick={() => {
          incrementBy(5);
        }}
      >
        +5
      </button>
    </>
  );
}

export default App;
