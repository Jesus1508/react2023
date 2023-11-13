// import { heroes } from './data/heroes'
import heroes, { owners } from '../data/heroes';

// console.log('Import, Export, Funciones')

// console.log(heroes)

export const getHeroeById = (id) => heroes.find((e) => e.id === id)

// console.log( getHeroeById (2))

export const getHeroesByOwner = (owner) => heroes.filter((h) => h.owner === owner)

