import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import useComponentVisible from '../../hooks/use-component-visible.hook';

import styles from './nav-drop-down.style.css';

const NavDropDown = ({ setLoggedInUser }) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  return (
    <div ref={ref} role={"menuitem"} taxindex={"1"} onClick={() => setIsComponentVisible(!isComponentVisible)}>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} type="button" className={styles.NavDropdownBtn}>
        <i className="fas fa-user-astronaut fa-3x" />
      </motion.button>
      <AnimatePresence>
      {isComponentVisible && <Links setLoggedInUser={setLoggedInUser} />}

      </AnimatePresence>
    </div>
  );
};

const Links = ({ setLoggedInUser }) => {
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    fetch('/api/logout').then(() => {
      setLoggedInUser('');
      history.push('/');
    });
  };

  return (
    
        <motion.div
            className={styles.NavDropdownModal}
            initial={{ scale: 0, y:-50 }}
            animate={{ y: 0, scale: 1,  opacity: 1 }}
            exit={{ scale: 0, y:-50, opacity: 0 }}
            transition={{type: "spring", stiffness: 260, damping: 20}}
        >
        <Link to="/" className={styles.NavDropdownOption}>
            Home
        </Link>
        <Link to="/" className={styles.NavDropdownOption}>
            My settings
        </Link>
        <a
            type="button"
            onClick={logout}
            className={styles.NavDropdownOption}
        >
            Logout
        </a>
        </motion.div>
  );
};

export default NavDropDown;
