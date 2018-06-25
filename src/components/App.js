import React, { Component } from 'react';
import UsersList from './users-list';
import User from './user';
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
