import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Nav.css';

const Nav = ({ loggedIn, setLoggedIn }) => {
  const history = useHistory();

  const logout = () => {
    console.log('logging out');
    // TODO: clear token cookie
    setLoggedIn(false);
    history.push('/');
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">Home</Link>
          </li>
          {!loggedIn && (
            <>
              <li className="nav__item">
                <Link to="/login" className="nav__link">Login</Link>
              </li>
              <li className="nav__item">
                <Link to="/register" className="nav__link">Register</Link>
              </li>
            </>
          )}
          {loggedIn && (
            <>
              <li className="nav__item">
                <Link to="/profile" className="nav__link">Profile</Link>
              </li>
              <li className="nav__item">
                <button type="button" className="nav__link" onClick={logout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
