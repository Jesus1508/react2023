/* eslint-disable react/prop-types */
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./"

export const HeroeList = ( { publisher } ) => {

    const heroes = getHeroesByPublisher( publisher )

    return (
        <div className="row rows-cols-md-3 g-3">
            {
                heroes.map( (heroe) => (
                    <HeroCard 
                        key={ heroe.id }
                        { ...heroe }
                    />
                ))
            }
        </div>
    )
}
