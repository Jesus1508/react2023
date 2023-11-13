
console.log('Desestructuración de Arreglos')
const personajes = ['Goku', 'Vegeta', 'Trunks']

console.log(personajes)

const [goku, vegeta, trunks] = personajes

const [ , p2] = personajes

console.log(goku, vegeta, trunks)

console.log(p2)

const retornaArreglo = () => {
    return ['ABC', '123']
}

const [letras, numeros] = retornaArreglo()

console.log(letras, numeros)

/* */
// 1.- el primer valor del arr se llamará nombre
// 2.- el segundo setNombre
const useState = (valor) => {
    return [ valor, ()=> { console.log('Hola mundo') }]
}

const [ nombre, setNombre ] = useState('Goku')

console.log(nombre)
setNombre()