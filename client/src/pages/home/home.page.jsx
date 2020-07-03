import React from 'react';
import { Link } from 'react-router-dom';

import DriveAnimation from '../../components/drive-animation/drive-animation.component';
import Mountains from '../../components/mountains/mountains.component';

import styles from './home.style.css';

// TODO: Add current path the loggedInUser and display as text
// TODO: Need current path to pass to travel
const LoggedIn = (loggedInUser) => (
  <>
    <Link to="/path-viewer">
      Travel
      {loggedInUser}
      path
    </Link>
    <Link to="/my-paths">My paths</Link>
    <Link to="/all-paths">All paths</Link>
    <Link to="/discover">Discover new path</Link>
    <Link to="/path-editor">Forge new path</Link>
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
    <Link className={styles.Link} to="/discover">
      <span data-content="Discover your path" />
      {'\u00A0\u00A0\u00A0'}
      Discover your path
      {'\u00A0\u00A0\u00A0'}
    </Link>
    <Link className={styles.Link} to="/path-editor">
      <span data-content="Forge own path" />
      {'\u00A0\u00A0\u00A0'}
      Forge own path
      {'\u00A0\u00A0\u00A0'}
    </Link>
  </>
);

const Home = ({ loggedInUser }) => (
  <>
    <div className={styles.Background}>
      <div className={styles.HomeContainer}>{loggedInUser ? LoggedIn(loggedInUser) : NotLoggedIn()}</div>
      <DriveAnimation />
      <Mountains />
    </div>
  </>
);

export default Home;
