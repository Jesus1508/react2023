import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()

    const onClick = () => {
        inputRef.current.select()
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />
            <input 
                type="text" 
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <input 
                ref={inputRef}
                type="text" 
                placeholder="Ingrese su nombre"
                className="form-control mt-2"
            />

            <input 
                type="text" 
                placeholder="Ingrese su nombre"
                className="form-control mt-2"
            />

            <button 
                className="btn btn-primary mt-3"
                onClick={onClick}
            >
                Set focus
            </button>
        </>
    )
}
