import { NavLink } from 'react-router-dom'
import { ENLACES } from '../datos'
import Logo from './Logo'

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__interior">
        <NavLink to="/" className="navbar__marca" end>
          <Logo tamano={34} />
          <span className="navbar__marca-texto">
            Raíz
            <span>Café de origen</span>
          </span>
        </NavLink>
        <nav aria-label="Navegación principal">
          <ul className="navbar__enlaces">
            {ENLACES.map((enlace) => (
              <li key={enlace.id}>
                <NavLink
                  to={enlace.ruta}
                  end={enlace.ruta === '/'}
                  className={({ isActive }) =>
                    isActive ? 'navbar__enlace navbar__enlace--activo' : 'navbar__enlace'
                  }
                >
                  {enlace.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
