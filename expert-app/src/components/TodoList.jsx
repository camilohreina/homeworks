import PropTypes from 'prop-types';

export const TodoList = ({ todoList, onDeleteTodo }) => {
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <li key={todo.id}>
      <span>{todo.description}</span>
      <button onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
