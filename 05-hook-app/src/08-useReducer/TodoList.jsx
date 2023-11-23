import { TodoItem } from './'

export const TodoList = ({ todos = [] }) => {
    return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    // TodoItem....
                    <TodoItem key={ todo.id } todo={ todo }/>
                ))
            }
            
        </ul>
    )
}
