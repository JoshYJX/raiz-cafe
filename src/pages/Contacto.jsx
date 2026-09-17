import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const VALORES_INICIALES = { nombre: '', correo: '', mensaje: '' }

function validar(valores) {
  const errores = {}

  if (!valores.nombre.trim()) {
    errores.nombre = 'Escribe tu nombre.'
  }

  if (!valores.correo.trim()) {
    errores.correo = 'Escribe tu correo.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.correo)) {
    errores.correo = 'Ese correo no parece válido.'
  }

  if (!valores.mensaje.trim()) {
    errores.mensaje = 'Cuéntanos qué necesitas.'
  } else if (valores.mensaje.trim().length < 10) {
    errores.mensaje = 'Escribe al menos 10 caracteres.'
  }

  return errores
}

export default function Contacto() {
  const [valores, setValores] = useState(VALORES_INICIALES)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function manejarCambio(evento) {
    const { name, value } = evento.target
    setValores((anteriores) => ({ ...anteriores, [name]: value }))
  }

  function manejarEnvio(evento) {
    evento.preventDefault()
    const erroresEncontrados = validar(valores)
    setErrores(erroresEncontrados)

    if (Object.keys(erroresEncontrados).length === 0) {
      setEnviado(true)
    }
  }

  function escribirOtroMensaje() {
    setValores(VALORES_INICIALES)
    setErrores({})
    setEnviado(false)
  }

  return (
    <>
      <Helmet>
        <title>Contacto · Raíz Café de Origen</title>
        <meta
          name="description"
          content="¿Quieres hacer un pedido o visitarnos? Escríbenos a cafe@raiz.gt o llámanos. Estamos en Ciudad de Guatemala."
        />
        <link rel="canonical" href="https://raiz-cafe-two.vercel.app/contacto" />
      </Helmet>

      <section className="seccion">
        <div className="contenedor">
          <p className="eyebrow">Contacto</p>
          <h1>Escríbenos</h1>
          <p>
            ¿Tienes una pregunta sobre un pedido, quieres café al mayoreo o
            simplemente quieres saludar? Este formulario llega directo a nuestro
            correo.
          </p>

          {enviado ? (
            <div className="confirmacion" role="status">
              <h3>¡Gracias, {valores.nombre}!</h3>
              <p>
                Recibimos tu mensaje en <strong>{valores.correo}</strong>. Te
                respondemos en menos de 48 horas.
              </p>
              <button type="button" className="boton boton--primario" onClick={escribirOtroMensaje}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className="formulario" onSubmit={manejarEnvio} noValidate>
              <div className={`campo ${errores.nombre ? 'campo--error' : ''}`}>
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={valores.nombre}
                  onChange={manejarCambio}
                  aria-invalid={Boolean(errores.nombre)}
                  aria-describedby={errores.nombre ? 'error-nombre' : undefined}
                />
                {errores.nombre && (
                  <p className="campo__mensaje-error" id="error-nombre">
                    {errores.nombre}
                  </p>
                )}
              </div>

              <div className={`campo ${errores.correo ? 'campo--error' : ''}`}>
                <label htmlFor="correo">Correo</label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  value={valores.correo}
                  onChange={manejarCambio}
                  aria-invalid={Boolean(errores.correo)}
                  aria-describedby={errores.correo ? 'error-correo' : undefined}
                />
                {errores.correo && (
                  <p className="campo__mensaje-error" id="error-correo">
                    {errores.correo}
                  </p>
                )}
              </div>

              <div className={`campo ${errores.mensaje ? 'campo--error' : ''}`}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={valores.mensaje}
                  onChange={manejarCambio}
                  aria-invalid={Boolean(errores.mensaje)}
                  aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
                />
                {errores.mensaje && (
                  <p className="campo__mensaje-error" id="error-mensaje">
                    {errores.mensaje}
                  </p>
                )}
              </div>

              <button type="submit" className="boton boton--primario">
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}