import { NavLink } from 'react-router-dom'
import classes from './MainHeader.module.css';
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.header_links}>
          <li>
            <NavLink activeClassName={classes.header_link_active}
              to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.header_link_active}
              to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader;