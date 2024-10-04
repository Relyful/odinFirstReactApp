import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// import Greeting from './Greeting.jsx'
// import Food from './Food.jsx'
import Accordion from './moreState'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordion />
  </StrictMode>,
)
