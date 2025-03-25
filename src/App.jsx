import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/page/Home'
import NavbarMenu from './components/NavbarMenu'
import GaleriaFotos from './components/page/GaleriaFotos';

function App() {
  return (
    <Router>
      <NavbarMenu />  {/* Navbar estará en todas las páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<GaleriaFotos />} />
      </Routes>
    </Router>
  )
}

export default App
