import { HeroeList } from "../components"

export const MarvelPage = () => {

    const publisher = 'Marvel Comics'
    
    return (
        <>
            <h1>Marvel Comics</h1>
            <hr />

            <HeroeList publisher={ publisher }/>
        </>
    )
}
