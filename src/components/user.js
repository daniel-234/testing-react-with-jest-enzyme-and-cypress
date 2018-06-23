import React from 'react';

const User = props => {
  const id = props.id;

  return (
    <div>
      <p className="id">User {id}</p>
    </div>
  );
};

export default User;
