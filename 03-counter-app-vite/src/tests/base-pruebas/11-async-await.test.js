import { getImagen } from '../../base-pruebas/11-async-await';

/* eslint-disable no-undef */
describe('Pruebas en 11-async-await', () => {
    
    test('getImagen debe devolver un URL de la imagen', async() => {

        const url = await getImagen()
        expect( typeof url).toBe('string')
        
    });

});