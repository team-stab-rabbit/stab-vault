import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import HamburgerMenu from '../hamburger-menu/hamburger-menu.component';

import styles from './nav.style.css';

const Nav = ({ loggedInUser, setLoggedInUser }) => (
  <header className={styles.header}>
    <nav className={styles.Nav}>
      {!loggedInUser && (
        <>
          <Link to="/">
            <button type="button" className={`${styles.NavBtn} ${styles.NavBtnHome}`}>
              Home
            </button>
          </Link>
          <Link to="/register">
            <button type="button" className={`${styles.NavBtn} ${styles.NavBtnSignUp}`}>
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} type="button" className={`${styles.NavBtn} ${styles.NavBtnLogin}`}>
              Login
            </motion.button>
          </Link>
        </>
      )}
      {loggedInUser && <HamburgerMenu setLoggedInUser={setLoggedInUser} />}
    </nav>
  </header>
);

export default Nav;
