import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './dist/css/main.css';

import NavbarComponent from './components/NavbarComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarComponent />
    {/* <App /> */}
    {/* <FooterComponent /> */}
  </StrictMode>,
)
