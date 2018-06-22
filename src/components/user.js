import React, { Component } from 'react';
// import fetchUser from '../utils/utils';

// const getUserUrl = id => `https://jsonplaceholder.typicode.com/users/${id}`;

class User extends Component {
  // state = {
  //   user: null
  // };

  // componentDidMount() {
  //   fetchUser(getUserUrl(1)).then(user => {
  //     this.setState({
  //       user
  //     });
  //   });
  // }

  render() {
    // console.log(this.state.user);
    const id = this.props.id;
    return (
      <div>
        <p>User {id}</p>
      </div>
    );
  }
}

export default User;
