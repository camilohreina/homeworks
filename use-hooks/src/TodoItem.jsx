export const TodoItem = ({ todo }) => {
    return (
        <li className="list-group-item">
            <p>{todo.description}</p>
            <button className="btn btn-danger">Delete</button>
        </li>
    )
}