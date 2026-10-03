import React, { useState } from 'react'

export default function FormularioMuestra() {
  const [enviado, setEnviado] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    negocio: '',
    origen: 'Huehuetenango',
    direccion: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes registrar el evento en GA4 si lo deseas
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div style={{
        background: '#ffffff',
        border: '2px solid #bd5338',
        borderRadius: '8px',
        padding: '2rem',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h3 style={{ color: '#bd5338', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          ¡Muestra solicitada con éxito! ☕
        </h3>
        <p style={{ color: '#665e5a' }}>
          Gracias <strong>{formData.nombre}</strong>. Enviaremos un paquete de muestra de <strong>{formData.origen}</strong> a <strong>{formData.negocio}</strong> en los próximos días.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{
      background: '#ffffff',
      padding: '2rem',
      borderRadius: '8px',
      border: '1px solid #e8e2d8',
      maxWidth: '600px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <div>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.3rem' }}>
          Nombre completo *
        </label>
        <input
          type="text"
          name="nombre"
          required
          placeholder="Ej. María Xoc"
          value={formData.nombre}
          onChange={handleChange}
          style={{ width: '100%', padding: '0.7rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.3rem' }}>
            Correo electrónico *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="correo@tunegocio.gt"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.7rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.3rem' }}>
            Nombre de tu Negocio / Cafetería *
          </label>
          <input
            type="text"
            name="negocio"
            required
            placeholder="Ej. Café El Volcán"
            value={formData.negocio}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.7rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.3rem' }}>
          Selecciona el origen de tu muestra
        </label>
        <select
          name="origen"
          value={formData.origen}
          onChange={handleChange}
          style={{ width: '100%', padding: '0.7rem', borderRadius: '4px', border: '1px solid #ccc', background: '#fff' }}
        >
          <option value="Huehuetenango">Huehuetenango (Notas a Naranja, Panela, Cacao)</option>
          <option value="Antigua Guatemala">Antigua Guatemala (Notas a Chocolate, Almendra)</option>
          <option value="Cobán">Cobán (Notas a Frutas Dulces y Vainilla)</option>
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.3rem' }}>
          Dirección de entrega *
        </label>
        <input
          type="text"
          name="direccion"
          required
          placeholder="Ciudad de Guatemala, Quetzaltenango, etc."
          value={formData.direccion}
          onChange={handleChange}
          style={{ width: '100%', padding: '0.7rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      <button
        type="submit"
        className="boton boton--primario"
        style={{ marginTop: '0.5rem', width: '100%', cursor: 'pointer' }}
      >
        Solicitar muestra gratuita
      </button>
    </form>
  )
}