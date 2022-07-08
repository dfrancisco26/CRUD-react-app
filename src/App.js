import './App.css';

import React from 'react';
import { useState, useEffect } from 'react';
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








export default function App() {

  const [user, setUser] = useState();





  return (
    <Router>
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
        </nav>
        <Switch>
          <Route exact path="/">
            {
              !user ? <Auth setUser={setUser} /> : <Redirect to="/list" />
            }
          </Route>
          <Route exact path="/create">
            {
              !user ? <Auth setUser={setUser} /> : <Redirect to="/create" />
            }
          </Route>
          <Route exact path="/list/:id">
            <Update />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}