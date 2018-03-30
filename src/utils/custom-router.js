/*
 * Credits for the code to [Tyler McGinnis - Build your own React
 * Router v4](https://tylermcginnis.com/build-your-own-react-router-v4/).
 *
 * The following code is copied from his, to learn the inner workings
 * of the React-Router library following his explanation.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const matchPath = (pathname, options) => {
	const { exact = false, path } = options;

	if (!path) {
		return {
			path: null,
			url: pathname,
			isExact: true
		}
	}
};

class Route extends Component {
	static propTypes = {
		exact: PropTypes.bool,
		path: PropTypes.string,
		component: PropTypes.func,
		render: PropTypes.func
	};

	// Add a `popstate` listener when the component mounts.
	componentWillMount() {
		// HTML5's `popstate` event will be fired whenever the user
		// clicks on the forward or back button.
		addEventListener('popstate', this.handlePop);
	}

	componentWillUnmount() {
		addEventListener('popstate', this.handlePop);
	}

	// Force a re-render (it happens when the `popstate` event is fired).
	handlePop = () => {
		this.forceUpdate();
	};

	render() {
		const { path, exact, component, render } = this.props;

		// const match = matchPath(
		// 	location.pathname,
		// 	{ path, exact }
		// );

		// Force match to a fixed value for our first iteration.
		const match = ['/'];

		// If the current location doesn't match the `path` prop, do nthing.
		if (!match) {
			return null;
		}

		// If the current location matches the `path` prop, create a new
		// element passing in `match` as the prop.
		if (component) {
			return React.createElement(component, { match });
		}

		// If the current location matches the `path` prop, but `component`
		// was undefined, invoke the `render` prop passing in match as an
		// argument.
		if (render) {
			return render({ match });
		}

		return null;
	}
}

export default Route;