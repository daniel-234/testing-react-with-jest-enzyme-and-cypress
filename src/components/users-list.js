import React, { Component } from 'react';
import User from './user';
import { Link } from '../utils/custom-router';

class UsersList extends Component {
  render() {
    return (
      <div>
        <User id={1} />
        <Link to="/user">User Details</Link>
      </div>
    );
  }
}

export default UsersList;
