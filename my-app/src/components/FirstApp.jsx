import PropTypes from 'prop-types';
import { useState } from 'react';

const FirstApp = ({ title, sum }) => {
  const [counter, setCounter] = useState(sum);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(sum);
  };

  return (
    <>
      <h1>{title}</h1>
      <p>{counter}</p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => handleAdd()}>+1</button>
        <button onClick={() => handleSubtract()}>-1</button>
        <button onClick={() => handleReset()}>-Reset</button>
      </div>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: 'No title provided',
  sum: 0,
};

export default FirstApp;
