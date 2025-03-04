import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ResetStyle from './Style/ResetStyle.tsx'
import GlobalStyle from './Style/GlobalStyle.tsx'
import ContextProvider from './Context/Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
)
