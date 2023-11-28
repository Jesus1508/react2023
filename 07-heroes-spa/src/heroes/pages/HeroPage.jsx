/* eslint-disable no-unused-vars */
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'
import { heroes } from '../data/heroes'

export const HeroPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const heroe = getHeroById( id )

    const onNavigateBack = () => {
        navigate(-1)
    }
    
    if( !heroe ){
        return <Navigate to='/Marvel'/>
    }
    
    return (
        <div className='row mt-5'>
            <div className="col-4">
                <img 
                    src={ `/assets/heroes/${id}.jpg` }
                    alt={ heroe.superhero } 
                    className='img-thumbnail'
                />
            </div>
            <div className="col-8">
                <h3>{ heroe.superhero }</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: </b>{ heroe.alter_ego }</li>
                    <li className='list-group-item'><b>Publisher: </b>{ heroe.publisher }</li>
                    <li className='list-group-item'><b>First appearance: </b>{ heroe.first_appearance }</li>
                    <h5 className='mt-3'>Characters</h5>
                    <p>{ heroe.characters }</p>

                    <button 
                        className='btn btn-primary'
                        onClick={ onNavigateBack }
                    >
                        Regresar
                    </button>
                </ul>
            </div>
        </div>
    )
}
