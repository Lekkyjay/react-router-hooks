import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user/fela">User</Link>
          </li>
        </ul>
      </header>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/user/:name" component={User} />
    </Switch>
    </Router>
  );
}

export default App;
