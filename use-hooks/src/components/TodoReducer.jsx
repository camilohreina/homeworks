
export const TodoReducer = (initialState = [], action) => {
    switch (action.type) {
        case "[TODO] ADD TODO":
            return [...initialState, action.payload]
        case "[TODO] DELETE TODO":
            return initialState.filter(todo => todo.id !== action.payload);
        default:
            return initialState
    }
}