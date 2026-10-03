import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { PRODUCTOS, BENEFICIOS } from '../datos'
import TarjetaProducto from '../components/TarjetaProducto'
import Beneficio from '../components/Beneficio'
import { SeccionAPI } from '../components/SeccionAPI'
import FormularioMuestra from '../components/FormularioMuestra'

export default function Inicio() {
  const destacados = PRODUCTOS.filter((p) => p.destacado)

  return (
    <>
      <Helmet>
        <title>Raíz · Café de especialidad de Guatemala</title>
        <meta
          name="description"
          content="Café de especialidad tostado por manos locales. Granos de Huehuetenango, Antigua y Cobán, entregados en menos de diez días desde el tueste."
        />
        <link rel="canonical" href="https://raiz-cafe-two.vercel.app/" />
      </Helmet>

      <section className="hero">
        <div className="contenedor hero__grid">
          <div>
            <p className="eyebrow">Café de especialidad · Guatemala</p>
            <h1 className="hero__titulo">Café que nace en casa</h1>
            <p className="hero__descripcion">
              Granos de altura tostados por manos locales. Trabajamos directo con
              familias productoras de Huehuetenango, Antigua y Cobán para llevar
              su cosecha a tu taza en menos de diez días desde el tueste.
            </p>
            <div className="hero__acciones">
              {/* Botón CTA apuntando directamente al formulario de muestras */}
              <a href="#solicitar-muestra" className="boton boton--primario">
                Solicitar muestra gratis
              </a>
              <Link to="/nosotros" className="boton boton--fantasma">
                Conocer la historia
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <img
              src="/hero-cafe.jpg"
              alt="Taza de café humeante recién preparada"
              loading="eager"
              fetchpriority="high"
              width="900"
              height="900"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2>Por qué Raíz</h2>
          <div className="beneficios">
            {BENEFICIOS.map((beneficio) => (
              <Beneficio key={beneficio.id} beneficio={beneficio} />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN API: Monitoreo meteorológico */}
      <section className="seccion">
        <div className="contenedor">
          <SeccionAPI />
        </div>
      </section>

      <section className="seccion seccion--tinta">
        <div className="contenedor">
          <h2>Destacados de la semana</h2>
          <div className="grid-productos">
            {destacados.map((producto) => (
              <TarjetaProducto key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN FORMULARIO DE MUESTRAS (Requisito Opción A) */}
      <section id="solicitar-muestra" className="seccion" style={{ background: '#efe9dd', padding: '3rem 1rem' }}>
        <div className="contenedor" style={{ textAlign: 'center' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            Prueba Raíz en tu Establecimiento
          </h2>
        <p style={{ textAlign: 'center', color: '#665e5a', marginBottom: '2rem', display: 'block', width: '100%' }}>
          Enviamos una muestra tostada de 250g sin costo para tu cafetería o restaurante.
        </p>
        <FormularioMuestra />
        </div>
      </section>
    </>
  )
}