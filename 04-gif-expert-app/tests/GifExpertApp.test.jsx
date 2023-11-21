import { render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp';

/* eslint-disable no-undef */
describe('Pruebas en GifExpertApp', () => {

    test('debde de hacer Match con el Snapshot', () => {
        const { container } = render(<GifExpertApp/>)

        expect( container ).toMatchSnapshot()
        
        // screen.debug()
    });

});