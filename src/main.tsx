import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './Components/App.tsx'
import ResetStyle from './Style/ResetStyle.tsx'
import GlobalStyle from './Style/GlobalStyle.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </StrictMode>,
)
