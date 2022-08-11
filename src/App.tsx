import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CyclesContextProvider } from './context/CyclesContext'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/theme/dark'
import { lightTheme } from './styles/theme/light'


function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <BrowserRouter>
                <CyclesContextProvider>
                    <Router />
                </CyclesContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export { App }
