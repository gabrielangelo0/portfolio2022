import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/themes/default'
import BackgroundImg from './assets/background-image.svg'
import { MainContainer } from './pages/Home/styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={ DefaultTheme }>
      <MainContainer>
          <GlobalStyles />
          <App />
      </MainContainer>
    </ThemeProvider>
  </React.StrictMode>
)
