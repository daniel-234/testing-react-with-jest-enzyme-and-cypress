import React, { Component } from 'react';
import User from './user';
import UserDetails from './user-details';
import logo from '../logo.svg';
import '../App.css';
import { Route, Link } from '../utils/custom-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <User id={1} />
        <Link to="/user">User</Link>
        <Route path="/user" component={UserDetails} />
      </div>
    );
  }
}

export default App;
