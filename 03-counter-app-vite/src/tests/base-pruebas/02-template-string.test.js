import { getSaludo } from '../../base-pruebas/02-template-string'

// eslint-disable-next-line no-undef
describe('Pruebas en template string', () => {
    // eslint-disable-next-line no-undef
    test('getSaludo debe de retornar "Hola Jesus"', () => {
        const name = 'Jesus'
        const message = getSaludo ( name )

        // eslint-disable-next-line no-undef
        expect( message ).toBe(`Hola ${name}`)
    })
});