import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/themes/default'
import { MainContainer } from './pages/Home/styles'
import { ThemeProvider } from 'styled-components'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

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
