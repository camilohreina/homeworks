import PropTypes from 'prop-types';
import { useState } from 'react';

export const TodoAdd = ({ onAddTodo }) => {
  const [todo, setTodo] = useState('');

  const onSetTodo = (evt) => {
    setTodo(evt.target.value);
  };

  return (
    <div>
      <h4>Agregar TODO</h4>
      <hr />
      <input
        type="text"
        name="description"
        placeholder="TO DO description..."
        autoComplete="off"
        value={todo}
        onChange={onSetTodo}
      />
      <button onClick={() => onAddTodo(todo)}>Agregar</button>
    </div>
  );
};

TodoAdd.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
