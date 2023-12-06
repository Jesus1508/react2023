import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from "../../src/router/PrivateRoute";

/* eslint-disable no-undef */
describe('pruebas en PrivateRoute', () => {

    test('debe de mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn()
        
        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Jesus'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Ruta Privada') ).toBeTruthy()
        expect( localStorage.setItem ).toHaveBeenCalled()
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman')
    });
    
});