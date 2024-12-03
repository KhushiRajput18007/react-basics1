import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BlackRock from './BlackRock.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlackRock />
  </StrictMode>,
)
