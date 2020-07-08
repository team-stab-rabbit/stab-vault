import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './path-expand-view.css';

const ExpandedPathView = ({ i, expanded, setExpanded }) => {
  // if you change the variable i to anything else it breaks. i don't know why.
  const isOpen = i === expanded;
  const {
    name, description,
  } = i;

  return (
    <div className={styles.PathItem} onClick={() => setExpanded(isOpen ? false : i)}>
      <motion.header
        className={isOpen ? styles.PathHeaderActive : styles.PathHeader }
        initial={false}
        
      >
        <h3 className={styles.Header}>{name}</h3>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className={styles.Section}
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div transition={{ duration: 0.8 }} className={styles.PathView}>
              <p>{description}</p>
            </motion.div>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={styles.Button}>
              View
            </motion.button>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandedPathView;
