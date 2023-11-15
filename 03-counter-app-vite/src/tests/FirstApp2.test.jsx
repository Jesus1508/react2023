import { render, screen } from '@testing-library/react'
import { FirstApp } from '../FirstApp';

/* eslint-disable no-undef */
describe('Pruebas sobre FirstApp Component', () => {
    const title = 'Hola, Soy Jesus'
    const subTitle = 'Soy un subtitulo'
    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render (<FirstApp title={title}/>)

        expect( container ).toMatchSnapshot()
    });

    test('debe de mostrar el mensaje "Hola, Soy Jesus', () => {
        render (<FirstApp title={title}/>)
        expect( screen.getByText(title) ).toBeTruthy()
    });

    test('debde de mostrar el titulo en un h1', () => {
        render (<FirstApp title={title}/>)
        expect( screen.getByRole('heading', { level: 1}).innerHTML ).toContain( title )
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        render (
            <FirstApp 
                title={title}
                subtitle={subTitle}
            />
        )

        expect( screen.getAllByText(subTitle).length ).toBe(2)
    });
    
});