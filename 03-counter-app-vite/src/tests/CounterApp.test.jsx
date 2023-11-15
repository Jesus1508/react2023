import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from "../CounterApp";

/* eslint-disable no-undef */
describe('Pruebas en CounterApp', () => {

    const value = 10
    test('debe de hacer match con el snapshot', () => {
        const { container } = render (<CounterApp value= { value }/>)
        expect( container ).toMatchSnapshot()
    });

    test('debe de mostrar el valor inicial de 100', () => {
        render (<CounterApp value={value}/>)
        expect( screen.getByText(10) ).toBeTruthy()
        expect( screen.getByRole('heading', { level: 2}).innerHTML ).toContain('10')
    });

    test('debe de incrementar con el boton +1', () => {
        
        render (<CounterApp value={value}/>)
        fireEvent.click( screen.getByText('+1') )

        expect( screen.getByText('11') ).toBeTruthy()
    });

    test('debe de decrementar con el boton -1', () => {
        
        render (<CounterApp value={value}/>)
        fireEvent.click( screen.getByText('-1') )

        expect( screen.getByText('9') ).toBeTruthy()
    });

    test('debe de resetear el valor inicial', () => {
        render (<CounterApp value={value}/>)
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        // fireEvent.click( screen.getByText('Reset') )
        fireEvent.click(screen.getByRole('button', {name:'btn-reset'}))
        // screen.getByRole('button', {name:'btn-reset'})
        expect( screen.getByText(10) ).toBeTruthy()
    });
});