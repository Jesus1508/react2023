import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/TodoItem";

/* eslint-disable no-undef */
describe('Pruebas en <TodoItem/>', () => {

    const todo = {
        id: 1, 
        description: 'Gema del Alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach( () => jest.clearAllMocks() )

    test('debe de mostrar el Todo pendiente de completar', () => {
        
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        )

        const liElement = screen.getByRole('listitem')
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-md-between')
        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toContain('align-self-center')
        expect( spanElement.className ).not.toContain('text-decoration-line-through')
        
    });

    test('debe de mostrar el Todo completado de completar', () => {
        
        todo.done = true

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        )

        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toContain('text-decoration-line-through')
    });

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {
        
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        )
        const spanElement = screen.getByLabelText('span')
        fireEvent.click( spanElement )
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )

    });
    
    test('btn debe de llamar el DeleteTodo cuando se hace click', () => {
        
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        )
        const deleteButton = screen.getByRole('button')
        fireEvent.click( deleteButton )
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id )

    });
});