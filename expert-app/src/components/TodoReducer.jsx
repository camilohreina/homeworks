export const TodoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...initialState, action.payload];
    case 'DELETE_TODO':
      return initialState.filter((todo) => todo.id !== action.payload);
    default:
      return initialState;
  }
};
