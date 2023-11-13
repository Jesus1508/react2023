
console.log('Desestructuración de Objetos')
const persona ={
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const {nombre, edad, clave} = persona

console.log(nombre, edad, clave)

const useContext = ({ nombre, edad, clave, rango = 'Capitán'}) => {
    // console.log(nombre, edad, clave, rango)
    return {
        nombreCable: clave,
        anios: edad,
        latlng:{
            lat: 154.465,
            lng: 95.19684
        }
    }
}

const { nombreCable, anios, latlng:{lat, lng}} = useContext(persona)

console.log(nombreCable, anios)
console.log(lat, lng)