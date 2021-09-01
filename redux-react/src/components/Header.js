import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';

const Header = () => {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatcher = useDispatch();

  const logoutDispatcher = () => {
    dispatcher(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated &&
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutDispatcher}>Logout</button>
            </li>
          </ul>
        </nav>}
    </header>
  );
};

export default Header;
