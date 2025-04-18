import { NavLink } from 'react-router'
import { routes } from '../../config/router.config'

const Menu = () => {
  return (
    <nav>
      <ul>
        {routes
          .filter((route) => !route.path.includes(':')) // Фільтруємо динамічні роути
          .map(({ path, label }) => (
            <li key={path}>
              <NavLink to={path}>{label}</NavLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Menu
