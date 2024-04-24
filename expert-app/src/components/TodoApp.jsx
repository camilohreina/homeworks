import { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [
  {
    id: 1,
    description: 'Learn React',
    done: false,
  },
];

export const TodoApp = () => {
  const onAddTodo = (todo) => {
    dispatchTodos({
      type: 'ADD_TODO',
      payload: {
        id: new Date().getTime(),
        description: todo,
        done: false,
      },
    });
  };

  const onDeleteTodo = (todoId) => {
    dispatchTodos({
      type: 'DELETE_TODO',
      payload: todoId,
    });
  };
  const [todos, dispatchTodos] = useReducer(TodoReducer, initialState);

  return (
    <div>
      <h1>Todo App</h1>
      <hr />
      <TodoList todoList={todos} onDeleteTodo={onDeleteTodo} />
      <TodoAdd onAddTodo={onAddTodo} />
    </div>
  );
};
