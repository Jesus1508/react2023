/* eslint-disable no-undef */
import { todoReducer } from "../../../src/08-useReducer/todoReducer";

describe('Pruebas en el TodoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]
    test('debe de regresar el estado incial', () => {
        
        const newState = todoReducer( initialState, {})
        expect ( newState ).toBe( initialState )
    });

    test('debe de agregar un Todo', () => {
        
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'todo 2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action)
        expect ( newState.length ).toBe( 2 )
        expect ( newState ).toContain( action.payload )
    });
})