import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = []}) => {
    return (
        <ul className="list-group">
            {
                todos.map( (todo,key) => {
                    return (
                        <TodoItem key={key} todo={todo}/>
                    )
                })
            }
        </ul>
    )
}