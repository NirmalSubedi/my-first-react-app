import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import {CurrentTime} from './NamedExport.jsx';
import {Fruit} from './Fruit.jsx';
import { HTMLToJSX } from './HtmlToJSX.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting/>  
    <CurrentTime />
    <Fruit />
    <HTMLToJSX/>
  </StrictMode>,
)
