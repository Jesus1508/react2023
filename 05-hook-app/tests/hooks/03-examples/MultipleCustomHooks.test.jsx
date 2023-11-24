import { render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../../src/03-examples';

/* eslint-disable no-undef */
describe('Pruebas en MultipleCustomHook', () => {
    
    test('debe de mostrar el componente por defecto', () => {
        
        render( <MultipleCustomHooks/> )
        
        expect( screen.getByText('Loading...'))
        expect( screen.getByText('BreakingBad Quotes') )

        const nexButton = screen.getByRole('button', { name: 'Next quote'})

        expect( nexButton.disabled ).toBe(true)
    });

});