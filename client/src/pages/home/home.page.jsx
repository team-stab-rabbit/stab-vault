import React from 'react';
import { Link } from 'react-router-dom';

import DriveAnimation from '../../components/drive-animation/drive-animation.component';
import Mountains from '../../components/mountains/mountains.component';

import styles from './home.style.css';

// TODO: Add current path the loggedInUser and display as text
// TODO: Need current path to pass to travel
const LoggedIn = () => (
  <>
    <Link className={styles.Link} to="/my-paths">
      <span data-content="My paths" />
      {'\u00A0\u00A0\u00A0'}
        My paths
        {'\u00A0\u00A0\u00A0'}
      </Link>
      <Link className={styles.Link} to="/all-paths">
        <span data-content="All paths" />
        {'\u00A0\u00A0\u00A0'}
        All paths
        {'\u00A0\u00A0\u00A0'}
      </Link>
    <Link className={styles.Link} to="/path-editor">
      <span data-content="Forge new path" />
      {'\u00A0\u00A0\u00A0'}
      Forge new path
      {'\u00A0\u00A0\u00A0'}
    </Link>
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
      <div className={styles.HomeContainer}>{loggedInUser ? LoggedIn() : NotLoggedIn()}</div>
      <DriveAnimation />
      <Mountains />
    </div>
  </>
);

export default Home;
