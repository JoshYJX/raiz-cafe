import React from 'react'
import { useClimaFincas } from '../hooks/useClimaFincas'

function TarjetaClima({ nombre, temperatura, viento }) {
  return (
    <div style={{ background: '#ffffff', padding: '1.2rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #e8e2d8' }}>
      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{nombre}</h3>
      <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#bd5338', margin: '0.2rem 0' }}>{temperatura}°C</p>
      <p style={{ fontSize: '0.85rem', color: '#665e5a' }}>Viento: {viento} km/h</p>
    </div>
  )
}

export function SeccionAPI() {
  const { datos, cargando, error, reintentar } = useClimaFincas()

  return (
    <section style={{ margin: '3rem 0', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Estado del Tiempo en Nuestras Fincas</h2>
      <p style={{ color: '#665e5a', marginBottom: '1.5rem' }}>Monitoreo meteorológico en vivo para asegurar la calidad del grano.</p>

      {/* ESTADO 1: CARGANDO */}
      {cargando && (
        <div style={{ padding: '1.5rem', background: '#e2ddd5', borderRadius: '8px' }}>
          Cargando datos del clima...
        </div>
      )}

      {/* ESTADO 2: ERROR */}
      {!cargando && error && (
        <div style={{ padding: '1.5rem', background: '#f8d7da', color: '#721c24', borderRadius: '8px' }}>
          <p>⚠️ No se pudo obtener el clima: {error}</p>
          <button onClick={reintentar} style={{ marginTop: '0.8rem', padding: '0.5rem 1rem', background: '#bd5338', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Reintentar
          </button>
        </div>
      )}

      {/* ESTADO 3: VACÍO */}
      {!cargando && !error && datos.length === 0 && (
        <p>No hay información de clima disponible.</p>
      )}

      {/* ESTADO 4: ÉXITO */}
      {!cargando && !error && datos.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
          {datos.map((finca) => (
            <TarjetaClima key={finca.id} {...finca} />
          ))}
        </div>
      )}
    </section>
  )
}