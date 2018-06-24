import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '../utils/custom-router';
import styled from 'react-emotion';

const Container = styled('ol')`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

class UsersList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <Container>
          {users.map(user => (
            <li key={user.id} className="single-user">
              <div>
                <p className="name">{user.name}</p>
                <p className="username">{user.username}</p>
              </div>
              <Link to={`/${user.id}`}>User Details</Link>
            </li>
          ))}
        </Container>
      </div>
    );
  }
}

export default UsersList;
