/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import PathEditorContext from '../../contexts/path-editor-context';
import { addCollection } from '../../actions/path-editor';
import styles from './collection-expand-view.css';

const ExpandedCollectionView = ({ title, category, description }) => {
  const history = useHistory();
  const [expanded, toggleExpanded] = useState(false);
  const { dispatch } = useContext(PathEditorContext);

  const handleUse = () => {
    dispatch(
      addCollection({
        title,
        description,
        category,
      }),
    );
    history.push('/path-editor');
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
