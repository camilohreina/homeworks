import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };


  return {
    counter,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
