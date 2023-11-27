/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../../src/08-useReducer";
import { useTodos } from "../../../src/hooks/useTodos";

jest.mock('../../../src/hooks/useTodos')

describe('Pruebas sobre <TodoApp />', () => {
    
    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'Estoy aprendiendo React', done: false },
            { id: 2, description: 'Mejorando practicas', done: true}
        ], 
        todosCount: 2, 
        pendingsTodosCount: 1, 
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn()
    })

    test('debe de mostrar el componente correctamente', () => {
        
        render( <TodoApp /> )

        expect( screen.getByText('Estoy aprendiendo React') ).toBeTruthy()
        expect( screen.getByText('Mejorando practicas') ).toBeTruthy()
        expect( screen.getByRole('textbox') ).toBeTruthy()
    });
    
});