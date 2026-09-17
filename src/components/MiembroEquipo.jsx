export default function MiembroEquipo({ miembro }) {
  return (
    <div className="miembro-equipo">
      <div className="miembro-equipo__avatar" aria-hidden="true">
        {miembro.inicial}
      </div>
      <p className="miembro-equipo__nombre">{miembro.nombre}</p>
      <p className="miembro-equipo__rol">{miembro.rol}</p>
    </div>
  )
}
