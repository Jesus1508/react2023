/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs( category )

    return (
        <>
            <h4>{ category }</h4>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                            key={image.id} 
                            // title={image.title}
                            // url={image.url}
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.proTotype = {
    category: PropTypes.string.isRequired
}