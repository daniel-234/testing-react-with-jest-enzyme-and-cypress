import React, { Component } from 'react';
import UserItem from './user-item';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import logo from '../logo.svg';
import '../App.css';

// Add CSS-in-JS styling with Emotion.js.
const UnorderedList = styled('ul')`
  display: grid;
  list-style-type: none;
  padding: 1em;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
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
          {users.map(user => <UserItem key={user.id} user={user} />)}
        </UnorderedList>
      </div>
    );
  }
}

export default UsersList;
