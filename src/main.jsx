import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

console.log(
  "%c Built by Karabo Hlabangane ",
  "background: #0a0a0a; color: #c9a84c; font-size: 12px; font-weight: bold; padding: 6px 12px; border-left: 3px solid #c9a84c;"
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
