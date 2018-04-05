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

/*
 * Decide if a current URL matches the path of a `Route` component.
 */
const matchPath = (pathname, options) => {
	// Take into account Route's `exact` prop. It will only match if
	// the path matches the `Location.pathname` exactly.
	const { exact = false, path } = options;

	// If a Route isn't given a path, it will automatically be rendered.
	if (!path) {
		return {
			path: null,
			url: pathname,
			isExact: true
		};
	}

	// Return an array containing the matched text if it finds a match,
	// otherwise return null.
	// Get a match for every <Route> in the app, as each of them calls
	// `matchPath` in its render method.
	const match = new RegExp(`^${path}`).exec(pathname);

	if (!match) {
		// There wasn't a match.
		return null;
	}

	// Save the matched text from the array into a variable.
	const url = match[0];
	const isExact = pathname === url;

	if (exact && !isExact) {
		// There was a match, but it wasn't an exact
		// match as specified by the `exact` prop.
		return null;
	}

	return {
		path,
		url,
		isExact
	};
};

const historyPush = (path) => {
	history.pushState({}, null, path);
};

const historyReplace = (path) => {
	history.replaceState({}, null, path);
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

		// `match` is either an object or `null` depending on if there was
		// a match.
		const match = matchPath(
			location.pathname,
			{ path, exact }
		);

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

class Link extends Component {
	static propTypes = {
		to: PropTypes.string.isRequired,
		replace: PropTypes.bool
	};

	handleClick = (event) => {
		const { replace, to } = this.props;
		event.preventDefault();

		replace ? historyReplace(to) : historyPush(to);
	};

	render() {
		const { to, children } = this.props;
		return (
			<a href={to} onClick={this.handleClick}>
				{children}
			</a>
		);
	}
}

export default Route;