/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

// eslint-disable-next-line no-unused-vars
export const getPokemons = ( page = 0) => {

    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() )

        // TODO realizar peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)
        // const data = await resp.json()
        const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`)
        const data = resp.data

        dispatch( setPokemons({ pokemons:data.results, page: page + 1 }) ) 
    }

}