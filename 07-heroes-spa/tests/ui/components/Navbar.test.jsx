/* eslint-disable no-undef */

import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}))

describe('pruebas en <Navbar/>', () => {

    const contextValue = {
        logged: true,
        user:{
            name: 'Jesus',
            id: 'ABC'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() )
    
    test('debe de mostrar el nombre del usuario logueado', () => {
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Jesus') ).toBeTruthy()

    });

    test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button')
        fireEvent.click( logoutBtn )

        expect( contextValue.logout ).toHaveBeenCalled()
        expect( mockUseNavigate ).toHaveBeenCalledWith('/login', {"replace": true})

    });

});