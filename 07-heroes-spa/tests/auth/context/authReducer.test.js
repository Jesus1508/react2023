/* eslint-disable no-undef */

import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth";

describe('pruebas sobre authReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {})

        expect( state ).toEqual( state )
    });

    test('debe de (login) llamar el login autenticar y establecer el user', () => {
        
        const action = { 
            type: types.login,
            payload: {
                name: 'Jesus',
                id: '123'
            }
        }

        const state = authReducer( { logged: false }, action )

        expect( state ).toEqual(
            {
                logged: true,
                user: action.payload
            }
        )

    });

    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const state = {
            logged: true,
            user: { id:'123', name: 'Jesus'}
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action )

        expect( newState ).toEqual({ logged: false })

    });
});