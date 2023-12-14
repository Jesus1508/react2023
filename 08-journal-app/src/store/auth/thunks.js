import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() )

    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() )

        const result = await signInWithGoogle()
        
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) )

        dispatch( login( result ) )
    }
}

export const startCreateUserWithEmailPassword = ( { email, password, displayName } ) => {

    return async ( dispatch ) => {

        dispatch( checkingCredentials() )

        const result = await registerUserWithEmailPassword( { email, password, displayName } )
        
        if ( !result.ok ) return dispatch( logout( result  ))

        dispatch( login (result) )

    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {

    return async ( dispatch ) => {
        dispatch( checkingCredentials() )

        const result = await loginWithEmailPassword({ email, password })

        if ( !result.ok ) return dispatch( logout( result  ))

        dispatch( login (result) )
    }

}