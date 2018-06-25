import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const User = props => {
  const id = props.id;

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">User {id} details</h1>
      </header>
      <p className="id">User {id}</p>
    </div>
  );
};

export default User;
