import { useEffect, useReducer } from "react"
import { todoReducer, TodoAdd, TodoList} from './'

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la gema del alma',
    //     done: false
    // }
    
]

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || []
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer,  initialState, init)

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ))
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action )
    }

    return (
        <>
            <h1>TodoApp 10, <small>pendientes: 2</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList todos={ todos }/>
                    {/* Fin TodoList */}
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    {/* TodoAdd onNewTodo( todo ) */}
                    <TodoAdd onNewTodo={handleNewTodo}/>
                    {/* Fin TodoAdd */}
                </div>
            </div>

        </>
    )
}
