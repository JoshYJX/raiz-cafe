import { Link } from 'react-router-dom'
import { PRODUCTOS, BENEFICIOS } from '../datos'
import TarjetaProducto from '../components/TarjetaProducto'
import Beneficio from '../components/Beneficio'

export default function Inicio() {
  const destacados = PRODUCTOS.filter((p) => p.destacado)

  return (
    <>
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
              <Link to="/productos" className="boton boton--primario">
                Ver productos
              </Link>
              <Link to="/nosotros" className="boton boton--fantasma">
                Conocer la historia
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <img
              src="https://images.pexels.com/photos/18139081/pexels-photo-18139081.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Taza de café humeante recién preparada"
              loading="lazy"
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
    </>
  )
}
