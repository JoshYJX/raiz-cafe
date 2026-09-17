import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { registrarVistaDePagina } from './analytics'
import NavBar from './components/NavBar'
import SiteFooter from './components/SiteFooter'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Detalle from './pages/Detalle'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'

export default function App() {
  const location = useLocation()

  // Cada vez que cambia la ruta, enviamos un page_view a GA4
  useEffect(() => {
    registrarVistaDePagina(location.pathname + location.search, document.title)
  }, [location])

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