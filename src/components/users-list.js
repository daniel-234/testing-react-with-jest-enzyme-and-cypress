import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '../utils/custom-router';
import styled from 'react-emotion';
import logo from '../logo.svg';
import '../App.css';

const UnorderedList = styled('ul')`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style-type: none;
`;

class UsersList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Users list</h1>
        </header>
        <p className="App-intro">
          Here is a list of users. Click a link for more details.
        </p>
        <UnorderedList>
          {users.map(user => (
            <li key={user.id} className="single-user">
              <div>
                <picture>
                  <img
                    src="../../images/avatar1_small.jpg"
                    alt="Avatar image"
                  />
                </picture>
                <p className="name">{user.name}</p>
                <p className="username">{user.username}</p>
              </div>
              <Link to={`/${user.id}`}>User Details</Link>
            </li>
          ))}
        </UnorderedList>
      </div>
    );
  }
}

export default UsersList;
