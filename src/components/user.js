import React, { Component } from 'react';
import fetchUser from '../utils/utils';

const urlForUser = 'https://jsonplaceholder.typicode.com/users/';

const getUrl = id => urlForUser + id;

class User extends Component {
	state = {
		user: null
	};

	componentDidMount() {
		fetchUser(getUrl(1)).then(user => {
			this.setState({
				user
			})
			console.log(this.state.user.name);
		});
	}

	render() {
		return (
			<div>
				<p>Loading...</p>
			</div>
		);
	}
}

export default User;