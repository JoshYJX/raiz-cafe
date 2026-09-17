import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { PRODUCTOS } from '../datos'

export default function Detalle() {
  const { id } = useParams()
  const producto = PRODUCTOS.find((p) => p.id === Number(id))

  if (!producto) {
    return (
      <>
        <Helmet>
          <title>Producto no encontrado · Raíz Café de Origen</title>
          <meta name="description" content="El producto que buscas no existe en nuestro catálogo." />
        </Helmet>

        <section className="seccion">
          <div className="contenedor no-encontrado">
            <p className="eyebrow">Ups</p>
            <h1>Producto no encontrado</h1>
            <p>No tenemos ningún producto con ese identificador.</p>
            <Link to="/productos" className="boton boton--primario">
              Volver al catálogo
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>{`${producto.nombre} · Raíz Café de Origen`}</title>
        <meta
          name="description"
          content={producto.descripcion}
        />
        <link
          rel="canonical"
          href={`https://raiz-cafe-two.vercel.app/productos/${id}`}
        />
      </Helmet>

      <section className="seccion">
        <div className="contenedor detalle">
          <div className="detalle__visual">
            <img
              src={producto.imagen}
              alt={`Café ${producto.nombre} de Raíz Café de Origen`}
            />
          </div>
          <div>
            <p className="eyebrow">{producto.categoria}</p>
            <h1>{producto.nombre}</h1>
            <p className="detalle__precio">Q{producto.precio}</p>
            <p>{producto.descripcion}</p>

            {producto.notas.length > 0 && (
              <>
                <h3 style={{ fontSize: '1rem', marginTop: '24px' }}>Notas de cata</h3>
                <ul className="detalle__notas">
                  {producto.notas.map((nota) => (
                    <li key={nota}>{nota}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="hero__acciones" style={{ marginTop: '24px' }}>
              <Link to="/contacto" className="boton boton--primario">
                Consultar disponibilidad
              </Link>
              <Link to="/productos" className="boton boton--fantasma">
                Volver al catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}