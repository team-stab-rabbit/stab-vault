import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavDropDown from '../nav-drop-down/nav-drop-down.component'

import './nav.style.css';

const Nav = ({ loggedInUser, setLoggedInUser }) => (
  <header className="header">
    <nav className="nav">
        {!loggedInUser && 
            <>
              <Link to="/"><button className="nav__btn nav__btn--home">Home</button></Link>
              <Link to="/register"><button className="nav__btn nav__btn--sign-up">Sign Up</button></Link>
              <Link to="/login"><button className="nav__btn nav__btn--login">Login</button></Link>
            </>
        }
        {loggedInUser && <NavDropDown setLoggedInUser={setLoggedInUser}/>}
    </nav>
  </header>
);

export default Nav;
