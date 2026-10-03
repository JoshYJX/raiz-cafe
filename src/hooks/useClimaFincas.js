import { useState, useEffect, useCallback } from 'react'

const FINCAS = [
  { id: 'huehue', nombre: 'Huehuetenango', lat: 15.3197, lon: -91.4708 },
  { id: 'antigua', nombre: 'Antigua Guatemala', lat: 14.5586, lon: -90.7295 },
  { id: 'coban', nombre: 'Cobán (Alta Verapaz)', lat: 15.4708, lon: -90.3708 }
]

export function useClimaFincas() {
  const [datos, setDatos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const obtenerClima = useCallback(async () => {
    setCargando(true)
    setError(null)

    try {
      const peticiones = FINCAS.map(async (finca) => {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${finca.lat}&longitude=${finca.lon}&current_weather=true`
        const res = await fetch(url)
        
        if (!res.ok) {
          throw new Error(`Error HTTP ${res.status}: ${res.statusText}`)
        }
        
        const data = await res.json()
        return {
          id: finca.id,
          nombre: finca.nombre,
          temperatura: Math.round(data.current_weather.temperature),
          viento: data.current_weather.windspeed
        }
      })

      const resultados = await Promise.all(peticiones)
      setDatos(resultados)
    } catch (err) {
      setError(err.message || 'No se pudo cargar el clima')
    } finally {
      setCargando(false)
    }
  }, [])

  useEffect(() => {
    obtenerClima()
  }, [obtenerClima])

  return { datos, cargando, error, reintentar: obtenerClima }
}