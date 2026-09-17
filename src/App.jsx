import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SiteFooter from './components/SiteFooter'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Detalle from './pages/Detalle'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<Detalle />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
