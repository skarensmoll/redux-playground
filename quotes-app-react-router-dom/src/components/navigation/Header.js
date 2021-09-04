import React from 'react';
import classes from './Header.module.css';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.Header}>
      <nav>
        <h2>Great Quotes</h2>
        <ul>
          <li>
            <NavLink activeClassName={classes.Header_active} to="/quotes">All Quotes</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.Header_active} to="/new-quote">Add a quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;