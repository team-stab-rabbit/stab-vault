/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import styles from './collection-expand-view.css';

const ExpandedCollectionView = ({ title, category, description }) => {
  const [expanded, toggleExpanded] = useState(false);

  const handleUse = () => {
    console.log('CLICKED');
  };

  const handleContainerClick = () => {
    toggleExpanded(!expanded);
  };

  return (
    <div className={styles.Container}>
      {expanded ? (
        <>
          <h3 onClick={handleContainerClick}>{title}</h3>
          <h4>{category}</h4>
          <p>{description}</p>
          <button onClick={handleUse} type="button">
            Use
          </button>
        </>
      ) : (
        <h3 onClick={handleContainerClick}>{title}</h3>
      )}
    </div>
  );
};

export default ExpandedCollectionView;
