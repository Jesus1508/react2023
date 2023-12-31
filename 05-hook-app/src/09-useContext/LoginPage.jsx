import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre
                aria-label="preT"
            >
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button
                className="btn btn-primary"
                onClick={ () => setUser({ id:123, name: 'Jesus', email: 'iscjesus1508@gmail.com'}) }
            >
                Establecer usuario
            </button>
        </>
    )
}
