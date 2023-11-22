import { useLayoutEffect, useRef, useState } from "react"

/* eslint-disable react/prop-types */
export const Quotes = ( {quote, author }) => {

    const pRefe = useRef()
    
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    })
    
    useLayoutEffect(() => {
        const { width, height } = pRefe.current.getBoundingClientRect()
        setBoxSize({width, height})
    }, [quote])

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p 
                    ref={pRefe}
                    className="mb-1"
                >{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <code> { JSON.stringify(boxSize) } </code>
        </>
    )
}
