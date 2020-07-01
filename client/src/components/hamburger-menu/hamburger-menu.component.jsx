import React, { useRef }  from 'react';
import { motion, useCycle } from 'framer-motion';

import { useDimensions } from "../../hooks/use-dimensions.hook";
import { MenuToggle } from "./subcomponents/hamburger-menu-toggle/hamburger-menu-toggle.subcomponent";
import { Navigation } from "./subcomponents/hamburger-modal/hamburger-modal.subcomponent";

import styles from './hamburger-menu.style.css';


const sidebar = {
  open: (height = 300) => ({
    clipPath: `circle(${height * 2 + 1000}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 260px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const NavDropDown = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={styles.MotionNav}
    >
      <motion.div className={styles.BackgroundContainer} variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default NavDropDown

