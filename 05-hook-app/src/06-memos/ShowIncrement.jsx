/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react"

export const ShowIncrement = React.memo(( { increment }) => {

    console.log('ejecutado :(')
    
    return (
        <button
            className="btn btn-primary"
            onClick={ () => {
                increment( 5 )
            }}
        >
            Incrementar
        </button>
    )
})
