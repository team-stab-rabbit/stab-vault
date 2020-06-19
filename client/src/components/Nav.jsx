import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Nav.css';

const Nav = ({ loggedInUser, setLoggedInUser }) => {
  const history = useHistory();

  const logout = () => {
    console.log('logging out');
    // TODO: clear token cookie
    setLoggedInUser('');
    history.push('/');
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/collections" className="nav__link">Collections</Link>
          </li>
          {!loggedInUser && (
            <>
              <li className="nav__item">
                <Link to="/login" className="nav__link">Login</Link>
              </li>
              <li className="nav__item">
                <Link to="/register" className="nav__link">Register</Link>
              </li>
            </>
          )}
          {loggedInUser && (
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
