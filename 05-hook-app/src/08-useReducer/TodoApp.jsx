import { TodoAdd, TodoList} from './'
import { useTodos } from "../hooks"

export const TodoApp = () => {

    const { todos, todosCount, pendingsTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos()

    return (
        <>
            <h1>TodoApp { todosCount }, <small>pendientes: { pendingsTodosCount }</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                    {/* Fin TodoList */}
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    {/* TodoAdd onNewTodo( todo ) */}
                    <TodoAdd 
                        onNewTodo={handleNewTodo}
                    />
                    {/* Fin TodoAdd */}
                </div>
            </div>

        </>
    )
}
