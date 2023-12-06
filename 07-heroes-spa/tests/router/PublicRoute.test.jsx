import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

import { MemoryRouter, Route, Routes } from 'react-router-dom'

/* eslint-disable no-undef */
describe('Pruebas en PublicRouter', () => {

    test('debe de mostrar el children si no esta autenticado', () => {
        
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Ruta pública') ).toBeTruthy()

    });

    test('debe de navegar si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user:{
                name: 'Jesus',
                id: '123'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta pública</h1>
                            </PublicRoute>
                        }/>
                        <Route path='marvel' element={<h1>Página Marvel</h1>}/>
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Página Marvel') ).toBeTruthy()

    });
    
});