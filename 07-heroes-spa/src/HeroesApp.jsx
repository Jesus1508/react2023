import { AuthProvider } from "./auth"
import { AppRouter } from "./router/App.Router"

const HeroesApp = () => {
    return (
        <AuthProvider>

            <AppRouter />
            
        </AuthProvider>
    )
}

export default HeroesApp
