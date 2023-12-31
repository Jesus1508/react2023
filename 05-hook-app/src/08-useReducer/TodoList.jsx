/* eslint-disable react/prop-types */
import { TodoItem } from './'

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {

    return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    // TodoItem....
                    <TodoItem 
                        key={ todo.id } 
                        todo={ todo } 
                        onDeleteTodo={ onDeleteTodo } 
                        onToggleTodo={ onToggleTodo }
                    />
                ))
            }
            
        </ul>
    )
}
