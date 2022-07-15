import './App.css';

import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Create from './Create';
import Auth from './Auth';
import Update from './Update';
import List from './List';
import { client } from './services/client';
import { logout } from './services/fetch-utils';






export default function App() {

  const [user, setUser] = useState(client.auth.user());

  async function handleLogoutClick() {
    await logout();
    setUser('');

  }



  return (
    <Router>
      <h1>DRF26</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
          <li>
            {user && 
          <button onClick={handleLogoutClick}>Logout</button>}
          </li>
        </nav>
        <Switch>
          <Route exact path="/">
            {
              !user ? <Auth setUser={setUser} /> : <Redirect to="/list" />
            }
          </Route>
          <Route exact path="/create">
            {
              user ? <Create /> : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/list/:id">
            {
              user ? <Update /> : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/list">
            {
              user ? <List /> : <Redirect to="/" />
            }

          </Route>
        </Switch>
      </div>
    </Router>
  );
}