import './App.css';

import React from 'react';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Create from './Create';
import Auth from './Auth';
import Detail from './Detail';
import Update from './Update';
import List from './List';








export default function App() {

  const [auth, setAuth] = useState();







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
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
          <Route exact path="/create">
            <Create />
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