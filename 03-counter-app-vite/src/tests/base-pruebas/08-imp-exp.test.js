import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';

/* eslint-disable no-undef */
describe('Pruebas en import-export', () => {
    
    test('getHeroeById debe de retornar un héroe por ID', () => {
        
        const id = 1
        const hero = getHeroeById(id)

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroeById debe de retornar undefined si no existe el ID', () => {
        
        const id = 100
        const hero = getHeroeById(id)

        expect( hero ).toBeFalsy()
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)

        expect( heroes.length ).toBe(3)

        // expect( heroes ).toEqual([
        //     { id: 1, name: 'Batman', owner: 'DC' },
        //     { id: 3, name: 'Superman', owner: 'DC' },
        //     { id: 4, name: 'Flash', owner: 'DC' }
        // ])

        expect( heroes ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)

        expect( heroes.length ).toBe(2)
    });

});