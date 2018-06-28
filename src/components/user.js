import React from 'react';
import { css } from 'emotion';
import logo from '../logo.svg';
import '../App.css';

const styles = css`
  display: grid;
  grid-column-gap: 2em;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }

  grid-template-columns: repeat(2, 1fr);
`;

const picture = css`
  align-self: center;
  @media (min-width: 451px) {
    justify-self: end;
  }
`;

const details = css`
  align-self: center;
  @media (min-width: 451px) {
    justify-self: start;
  }
`;

const User = props => {
  const user = props.user;

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{user.name}</h1>
      </header>
      <div className={styles}>
        <picture className={picture}>
          <source
            srcSet="../../images/avatar2_large.jpg"
            media="(min-width: 800px)"
          />
          <source
            srcSet="../../images/avatar2.jpg"
            media="(min-width: 300px)"
          />
          <source
            srcSet="../../images/avatar2_small.jpg"
            media="(min-width: 70px)"
          />
          <img src="../../images/avatar2_large.jpg" alt="Avatar" />
        </picture>
        <div className={details}>
          <p>Username: {user.username}</p>
          <p>Company: {user.company.name}</p>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
          <p>Phone: {user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
