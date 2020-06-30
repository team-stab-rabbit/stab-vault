import React from 'react';
import { Link } from 'react-router-dom';

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
    <Link to="/all-paths">See paths</Link>
    <Link to="/discover">Discover your path</Link>
    <Link to="/path-editor">Forge own path</Link>
  </>
);

const Home = ({ loggedInUser }) => <div className={styles.HomeContainer}>{loggedInUser ? LoggedIn(loggedInUser) : NotLoggedIn()}</div>;

export default Home;
