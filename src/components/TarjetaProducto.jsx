import { Link } from 'react-router-dom'

export default function TarjetaProducto({ producto }) {
  return (
    <article className="tarjeta-producto">
      <div className="tarjeta-producto__imagen-envoltorio">
        <img
          className="tarjeta-producto__imagen"
          src={producto.imagen}
          alt={`Taza de café ${producto.nombre} de Raíz Café de Origen`}
          loading="lazy"
/>
      </div>
      <div className="tarjeta-producto__cuerpo">
        <span className="tarjeta-producto__categoria">{producto.categoria}</span>
        <h3 className="tarjeta-producto__nombre">{producto.nombre}</h3>
        <p className="tarjeta-producto__resumen">{producto.resumen}</p>
        <div className="tarjeta-producto__pie">
          <span className="tarjeta-producto__precio">Q{producto.precio}</span>
          <Link
            to={`/productos/${producto.id}`}
            className="tarjeta-producto__enlace"
            aria-label={`Ver detalle de ${producto.nombre}`}
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  )
}
