import { render } from '@testing-library/react'
import { FirstApp } from '../FirstApp';

/* eslint-disable no-undef */
describe('Pruebas sobre FirstApp Component', () => {
    // test('debe de hacer match con el snapshot ', () => {
    //     const title = 'Hola, Soy Jesus'
    //     const {container } = render( <FirstApp title={title}/> )
    //     expect( container ).toMatchSnapshot()
    // });

    test('debe de mostrar el titulo en un h1', () => {
        const title = 'Hola, Soy Jesus'
        const {container, getByText, getByTestId } = render( <FirstApp title={title}/> )
        expect( getByText(title) ).toBeTruthy()

        // const h1 = container.querySelector('h1')
        // expect( h1.innerHTML ).toBe(title)
        // expect( h1.innerHTML ).toContain(title)
        // expect( getByTestId('test-title').innerHTML ).toBe(title)
        expect( getByTestId('test-title').innerHTML ).toContain(title)
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, Soy Jesus'
        const subTitle = 'Soy un subtitulo'
        const {getAllByText } = render( 
            <FirstApp 
                title={title}
                subtitle={subTitle}
            /> 
        )

        expect( getAllByText(subTitle).length ).toBe(2)
    });
    
});