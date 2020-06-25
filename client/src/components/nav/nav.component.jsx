import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './nav.style.css';

const Nav = ({ loggedInUser, setLoggedInUser }) => {
  const history = useHistory();

  const logout = () => {
    fetch('/api/logout').then(() => {
      setLoggedInUser('');
      history.push('/');
    });
  };

  return (
    <header className="header">
      <nav className="nav">
          {!loggedInUser && (
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/login" className="nav__link">
                  Login
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/register" className="nav__link">
                  Register
                </Link>
              </li>
            </ul>
          )}
          {loggedInUser && (
            <button className="nav__btn">
              <i className="fas fa-user-astronaut fa-3x" />
            </button>
          )}
      </nav>
    </header>
  );
};

export default Nav;
