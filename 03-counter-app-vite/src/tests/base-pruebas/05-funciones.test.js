import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

/* eslint-disable no-undef */
describe('Pruebas sobre 05-funciones', () => {

    test('prueba en getUser() debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()

        expect( testUser ).toStrictEqual(user)
        
    })

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = 'Jesus'
        const testUser = {
            uid: 'ABC567',
            username: name
        }
        const user = getUsuarioActivo(name)

        expect( user ).toStrictEqual( testUser )
    });
    
});