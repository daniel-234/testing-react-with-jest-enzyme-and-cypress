/*
 * Credits for the code in this tests to [React Training](
 * https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/__tests__/Route-test.js)
 *
 * The following code is copied from theirs, to learn the proper way
 * to test React code in general and master the inner workings of the
 * React Router library in this specific case.
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Route from '../utils/custom-router';

describe('A Route Component', () => {

	test('renders automatically a component if it isn\'t given a path', () => {
		const TEXT = 'Welcome to Router testing!'
		const node = document.createElement('div');
		const Home = () => <div>{TEXT}</div>;
		ReactDOM.render(
			<Route component={Home} />,
			node
		);

		expect(node.innerHTML).toContain(TEXT);
	});
});