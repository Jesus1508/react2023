import { types } from "../../../src/auth";

/* eslint-disable no-undef */
describe('pruebas sobre types', () => {
    
    test('debe de regresar estos types', () => {
        
        expect( types ).toEqual(
            {
                login: '[Auth] Login',
                logout: '[Auth] Logout'
            }
        )

    });
});