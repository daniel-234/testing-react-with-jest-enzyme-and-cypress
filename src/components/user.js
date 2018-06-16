// @flow
import React, { Component } from 'react';
import fetchUser from '../utils/utils';

const getUserUrl = id => `https://jsonplaceholder.typicode.com/users/${id}`;

class User extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    fetchUser(getUserUrl(1)).then(user => {
      this.setState({
        user
      });
    });
  }

  render() {
    console.log(this.state.user);
    return this.state.user === null ? (
      <div>
        <p>Loading...</p>
      </div>
    ) : (
      <div>
        <p className="name">{this.state.user.name}</p>
        <p className="username">{this.state.user.username}</p>
      </div>
    );
  }
}

export default User;
