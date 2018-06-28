import React from 'react';
import { Link } from '../utils/custom-router';
import { css } from 'react-emotion';

const styles = css`
  margin-top: 2em;
  margin-bottom: 2em;
`;

const UserItem = props => {
  const user = props.user;
  return (
    <li key={user.id} className={styles}>
      <div>
        <picture>
          <source
            srcSet="../../images/avatar1_small.jpg"
            media="(min-width: 800px)"
          />
          <source
            srcSet="../../images/avatar1.jpg"
            media="(min-width: 300px)"
          />
          <img src="../../images/avatar1_small.jpg" alt="Avatar" />
        </picture>
        <div>
          <p>{user.name}</p>
          <p>{user.username}</p>
        </div>
      </div>
      <Link to={`/${user.id}`}>User Details</Link>
    </li>
  );
};

export default UserItem;
