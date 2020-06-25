import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from '../nav/nav.component';
import Login from '../login/login.component';
import Register from '../register/register.component';
import Profile from '../profile/profile.component';
import PageNotFound from '../page-not-found/page-not-found.component';
import WithAuth from '../with-auth/with-auth.component';
import AllCollections from '../collections/all-collections/all-collections.component';
import ExpandedCollection from '../collections/expanded-collection/expanded-collection.component';
import SavedCollections from '../collections/saved-collections/saved-collections.component';
import Home from '../home/home.component';

import './app.style.css';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  useEffect(() => {
    fetch('/api/checkToken')
      .then((resp) => resp.json())
      .then((data) => setLoggedInUser(data.userId));
  });
  return (
    <Router>
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

          <Route path="/collections/user/:userId">
            <AllCollections userCollections loggedInUser={loggedInUser} />
          </Route>

          <Route path="/collections/:id">
            <ExpandedCollection loggedInUser={loggedInUser} />
          </Route>

          <Route path="/savedcollections">
            <SavedCollections loggedInUser={loggedInUser} />
          </Route>

          <Route path="/all-collections" exact>
            <AllCollections loggedInUser={loggedInUser} />
          </Route>

          <Route path="/" exact>
            <Home loggedInUser={loggedInUser} />
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
