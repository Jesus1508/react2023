
console.log('Funciones')
const saludar = function ( nombre ){
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`
const saludar4 = () => `Hola Mundo`

console.log( saludar('Jesus'), saludar2('jesus'), saludar3('JeSuS'), saludar4() )

const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'Usuario'
    })


console.log(getUser())

/* */

// function getUsuarioActivo(nombre){
//     return{
//         uid: 'ABC123',
//         username: nombre
//     }
// }

const getUsuarioActivo = (nombre) => 
    ({
        uid: 'ABC123',
        username: nombre
    })

const usuarioActivo = getUsuarioActivo('Jesus')
console.log(usuarioActivo)