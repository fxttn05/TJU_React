import { Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import Homepage from './Pages/Homepage'

function App() {
  return <div>
      <NavbarComponent />
      <Homepage />
      <FooterComponent />
  </div>
}

export default App
