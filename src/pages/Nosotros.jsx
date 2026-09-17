import { EQUIPO } from '../datos'
import MiembroEquipo from '../components/MiembroEquipo'

export default function Nosotros() {
  return (
    <>
      <section className="seccion">
        <div className="contenedor">
          <p className="eyebrow">Nuestra historia</p>
          <h1>De la ladera del volcán a tu taza</h1>
          <p>
            Raíz nació en 2019 en un mercado de fin de semana en Antigua Guatemala,
            vendiendo bolsas de café tostado en un horno casero. Hoy trabajamos con
            doce familias productoras en Huehuetenango, Antigua y Cobán, y seguimos
            tostando en lotes pequeños para no perder el control de la calidad.
          </p>
          <p>
            Creemos que un buen café empieza mucho antes del tueste: empieza en el
            precio justo que se le paga a quien lo cultiva.
          </p>
        </div>
      </section>

      <section className="seccion seccion--tinta">
        <div className="contenedor">
          <h2>El equipo</h2>
          <div className="equipo">
            {EQUIPO.map((miembro) => (
              <MiembroEquipo key={miembro.id} miembro={miembro} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
