// src/analytics.js
import ReactGA from 'react-ga4'

// Tu Measurement ID de GA4
const MEASUREMENT_ID = 'G-0EGPYZLM7'

export function inicializarAnalytics() {
  ReactGA.initialize(MEASUREMENT_ID, {
    gtagOptions: {
      send_page_view: false, // Desactivamos el page_view automático
    },
  })
}

// Función para registrar vistas de página (importante para SPAs)
export function registrarVistaDePagina(ruta, titulo) {
  ReactGA.send({
    hitType: 'pageview',
    page: ruta,
    title: titulo,
  })
}

// Función para registrar eventos personalizados
export function registrarEvento(categoria, accion, etiqueta = '') {
  ReactGA.event({
    category: categoria,
    action: accion,
    label: etiqueta,
  })
}