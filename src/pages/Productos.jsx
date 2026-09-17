import { useState } from 'react'
import { PRODUCTOS, CATEGORIAS } from '../datos'
import TarjetaProducto from '../components/TarjetaProducto'

export default function Productos() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')

  const productosFiltrados =
    categoriaActiva === 'Todos'
      ? PRODUCTOS
      : PRODUCTOS.filter((p) => p.categoria === categoriaActiva)

  return (
    <section className="seccion">
      <div className="contenedor">
        <p className="eyebrow">Catálogo</p>
        <h1>Nuestros productos</h1>
        <p>
          Todo el café se tuesta en lotes pequeños. Filtra por tipo para
          encontrar justo lo que necesitas.
        </p>

        <div className="filtro" role="group" aria-label="Filtrar por categoría">
          {CATEGORIAS.map((categoria) => (
            <button
              key={categoria}
              type="button"
              onClick={() => setCategoriaActiva(categoria)}
              className={
                categoria === categoriaActiva
                  ? 'filtro__boton filtro__boton--activo'
                  : 'filtro__boton'
              }
              aria-pressed={categoria === categoriaActiva}
            >
              {categoria}
            </button>
          ))}
        </div>

        {productosFiltrados.length === 0 ? (
          <p style={{ marginTop: '32px' }}>No hay productos en esta categoría todavía.</p>
        ) : (
          <div className="grid-productos">
            {productosFiltrados.map((producto) => (
              <TarjetaProducto key={producto.id} producto={producto} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
