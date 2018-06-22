import React, { Component } from 'react';
import User from './user';

class UserDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const id = this.props.id;
    console.log(this.props);
    return (
      <div>
        <User id={id} />
      </div>
    );
  }
}

export default UserDetails;
