import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '../utils/custom-router';

class UsersList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <ol>
          {users.map(user => (
            <li key={user.id} className="single-user">
              <div>
                <p className="name">{user.name}</p>
                <p className="username">{user.username}</p>
              </div>
              <Link to={`/${user.id}`}>User Details</Link>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default UsersList;
