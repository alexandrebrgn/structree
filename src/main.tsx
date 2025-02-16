import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import {StructreeProvider} from "./context/context.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StructreeProvider>
      <App />
    </StructreeProvider>
  </StrictMode>,
)
