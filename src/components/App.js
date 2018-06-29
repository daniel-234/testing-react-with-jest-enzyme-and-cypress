import React, { Component } from 'react';
import UsersList from './users-list';
import User from './user';
import { Route } from '../utils/custom-router';
import fetchUsersList from '../utils/utils';

const getAllUsers = () => 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetchUsersList(getAllUsers()).then(users => {
      this.setState({ users });
    });
  }

  render() {
    return this.state.users.length ? (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => <UsersList users={this.state.users} />}
        />
        {this.state.users.map(user => (
          <Route
            key={user.id}
            exact
            path={`/${user.id}`}
            render={() => <User user={user} />}
          />
        ))}
      </div>
    ) : (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}

export default App;
