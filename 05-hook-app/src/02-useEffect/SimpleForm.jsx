import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'jesus',
        email: 'iscjesus1508@gmail.com'
    })

    const { username, email} = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target

        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    useEffect( () => {
        // console.log('useEffect called')
    }, [])

    useEffect( () => {
        // console.log('useEffect called: formState')
    }, [formState])

    useEffect( () => {
        // console.log('useEffect called: email')
    }, [email])

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            {
                (username === 'jesus') && <Message/>
            }
            
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="jesus@msn.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

        </>
    )
}