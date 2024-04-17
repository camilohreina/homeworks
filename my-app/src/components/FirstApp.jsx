import PropTypes from 'prop-types';
import { useCounter } from '../hooks/useCounter';

const FirstApp = ({ title, sum }) => {
  const { count, increment, decrement, reset } = useCounter(sum);

  return (
    <>
      <h1>{title}</h1>
      <p>{count}</p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>-Reset</button>
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
