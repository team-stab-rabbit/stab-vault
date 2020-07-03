import * as React from "react";
import { motion } from "framer-motion";
import { Link, useHistory } from 'react-router-dom';

import { MenuItem } from "../hamburger-menu-item/hamburger-menu-item.subcomponent";

import styles from './hamburger-modal.style.css'


const Links = ( setLoggedInUser ) => {
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    fetch('/api/logout').then(() => {
      setLoggedInUser('');
      history.push('/');
    });
  };

  return ([
      <Link to="/"       className={styles.NavListItem}>
        <div className={styles.IconPlaceholder} />
        <div className={styles.TextPlaceholder}>Home</div>
      </Link>,
      <Link to="/" className={styles.NavListItem}>
        <div className={styles.IconPlaceholder} />
        <div className={styles.TextPlaceholder}>My Settings</div>
      </Link>,
    <a
      type="button"
      onClick={logout}
      className={styles.NavListItem}
    >
      <div className={styles.IconPlaceholder}/>
      <div className={styles.TextPlaceholder}>Logout</div>
    </a>
  ])
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({ setLoggedInUser }) => {
  const links = Links(setLoggedInUser)
  return (
    <motion.ul variants={variants} className={styles.NavList}>
      {links.map((item, i) => (
        <MenuItem jsx={item} key={i} />
      ))}
    </motion.ul>
  )
}

