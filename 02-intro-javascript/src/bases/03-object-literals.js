
console.log('Objetos literales')

const persona = {
    nombre: 'Jesus',
    apellido: 'Solis',
    edad: 39,
    direccion:{
        ciudad: 'SCLC',
        zip: 29220,
        lat: 14.3232,
        lng: 34.923321
    }
}

const persona2 = { ...persona }
persona2.nombre = 'Manuel'

console.log( persona )
console.log( persona2 )