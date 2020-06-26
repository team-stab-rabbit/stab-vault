import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavDropDown from '../nav-drop-down/nav-drop-down.component'

import './nav.style.css';

const Nav = ({ loggedInUser, setLoggedInUser }) => (
  <header className="header">
    <nav className="nav">
        {!loggedInUser && 
            <>
              <Link to="/register"><button className="nav__register">Register</button></Link>
              <Link to="/login"><button className="nav__login">Login</button></Link>
            </>
        }
        {loggedInUser && <NavDropDown setLoggedInUser={setLoggedInUser}/>}
    </nav>
  </header>
);

export default Nav;
