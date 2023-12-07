import { ThemeProvider } from "@emotion/react"
import { CssBeseline } from '@mui/material'
import { purpleTheme } from "./"

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={ purpleTheme }>
            <CssBeseline />
            { children }
        </ThemeProvider>

    )
}
