import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Animation from '../../components/animation/animation.component';
import Mountains from '../../components/mountains/mountains.component';

import styles from './home.style.css';

// TODO: Add current path the loggedInUser and display as text
// TODO: Need current path to pass to travel
const LoggedIn = (setAnimation) => (
  <>
    <Link className={styles.Link} to="/my-paths">
      <span data-content="My paths" />
      {'\u00A0\u00A0\u00A0'}
      My paths
      {'\u00A0\u00A0\u00A0'}
    </Link>
    <button
      type="button"
      className={styles.Link}
      to="/all-paths"
      onClick={() => setAnimation(<Animation animationName="loggedInAllPaths" link="/all-paths" />)}
    >
      <span data-content="All paths" />
      {'\u00A0\u00A0\u00A0'}
      All paths
      {'\u00A0\u00A0\u00A0'}
    </button>
    <button type="button" className={styles.Link} onClick={() => setAnimation(<Animation animationName="loggedInForge" link="/path-editor" />)}>
      <span data-content="Forge new path" />
      {'\u00A0\u00A0\u00A0'}
      Forge new path
      {'\u00A0\u00A0\u00A0'}
    </button>
  </>
);

const NotLoggedIn = () => (
  <>
    <Link className={styles.Link} to="/all-paths">
      <span data-content="See paths" />
      {'\u00A0\u00A0\u00A0'}
      See paths
      {'\u00A0\u00A0\u00A0'}
    </Link>
    <button type="button">
      <span data-content="Forge own path" />
      {'\u00A0\u00A0\u00A0'}
      Forge own path
      {'\u00A0\u00A0\u00A0'}
    </button>
  </>
);

const Home = ({ loggedInUser }) => {
  const [animation, setAnimation] = useState(<Animation animationName={loggedInUser ? 'loggedInAllPaths' : 'notLoggedInAllPaths'} play={false} />);

  return (
    <>
      <div className={styles.Background}>
        <div className={styles.HomeContainer}>{loggedInUser ? LoggedIn(setAnimation) : NotLoggedIn(setAnimation)}</div>
        <div className={styles.Animation}>{animation}</div>
        <Mountains />
      </div>
    </>
  );
};

export default Home;
