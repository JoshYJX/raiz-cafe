export default function Beneficio({ beneficio }) {
  return (
    <div className="beneficio">
      <div className="beneficio__icono" role="img" aria-label={beneficio.titulo}>
        {beneficio.icono}
      </div>
      <h3 className="beneficio__titulo">{beneficio.titulo}</h3>
      <p className="beneficio__texto">{beneficio.texto}</p>
    </div>
  )
}
