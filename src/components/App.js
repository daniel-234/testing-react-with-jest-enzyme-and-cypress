import React, { Component } from 'react';
import UsersList from './users-list';
import User from './user';
import logo from '../logo.svg';
import '../App.css';
import { Route } from '../utils/custom-router';
import fetchUser from '../utils/utils';

const getAllUsers = () => 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetchUser(getAllUsers()).then(users => {
      this.setState({ users });
    });
  }

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
        <Route
          exact
          path="/"
          render={() => <UsersList users={this.state.users} />}
        />
        {this.state.users.map(user => (
          <Route
            key={user.id}
            path={`/${user.id}`}
            render={() => <User id={user.id} />}
          />
        ))}
      </div>
    );
  }
}

export default App;
