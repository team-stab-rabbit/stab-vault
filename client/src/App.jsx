import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Landing from './components/Landing';
import PageNotFound from './components/PageNotFound';
import WithAuth from './components/WithAuth';

import AllCollections from './components/collections/AllCollections';
import ExpandedCollection from './components/collections/ExpandedCollection';

import './App.css';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);

  return (
    <Router>
      { loggedInUser }
      <Nav loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <main>
        <Switch>

          <Route path="/register">
            <Register setLoggedInUser={setLoggedInUser} />
          </Route>

          <Route path="/login">
            <Login setLoggedInUser={setLoggedInUser} />
          </Route>

          <Route path="/profile">
            {/* To protect a route, simply wrap it with a WithAuth component */}
            <WithAuth Component={Profile} />
          </Route>

          <Route path="/collections/:id">
            <ExpandedCollection />
          </Route>

          <Route path="/collections">
            <AllCollections />
          </Route>

          <Route path="/" exact>
            <Landing />
          </Route>

          <Route path="/">
            <PageNotFound />
          </Route>

        </Switch>
      </main>
    </Router>
  );
};

export default App;
