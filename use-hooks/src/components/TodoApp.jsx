import { useEffect, useReducer } from "react"
import { TodoAdd } from "../TodoAdd"
import { TodoList } from "../TodoList"
import { TodoReducer } from "./TodoReducer"


const initialState = [{
    id: new Date().getTime(),
    description: "hacer la tarea",
    done: false
}]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}
export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] ADD TODO',
            payload: todo
        }
        dispatchTodo(action)
    }
    const handleDeleteTodo = (todoId) => {
        const action = {
            type: '[TODO] DELETE TODO',
            payload: todoId
        }
        dispatchTodo(action);
    };

    return (
        <>
            <h1> TodoApp </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={(todoId)=> handleDeleteTodo(todoId)}/>
                </div>
                <div className="col-5">
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>  
            </div>
        </>
    )
}