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
import { Route, Link, matchPath } from '../utils/custom-router';

describe('A Route', () => {
	test('renders at the root', () => {
		const TEXT = 'Welcome to Router testing!'
		const node = document.createElement('div');

		ReactDOM.render(
			<Route path='/' render={() => <h1>{TEXT}</h1>} />,
			node
		);

		expect(node.innerHTML).toContain(TEXT);
	});
});

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

describe('A Route render prop', () => {
	test('renders automatically if it isn\'t given a path', () => {
		const TEXT = 'Welcome to Router testing!'
		const node = document.createElement('div');

		ReactDOM.render(
			<Route render={() => <div>{TEXT}</div> } />,
			node
		);

		expect(node.innerHTML).toContain(TEXT);
	});
});

describe('A Link', () => {
	test('accepts a location "to" prop', () => {
		const location = '/some/path';
		const node = document.createElement('div');

		ReactDOM.render(
			<Link to={location}>link</Link>,
			node
		);

		const href = node.querySelector('a').getAttribute('href');

		expect(href).toEqual('/some/path');
	});

	test('throws with no "to" prop', () => {
		const node = document.createElement('div');

		spyOn(console, 'error');

		ReactDOM.render(
			<Link>link</Link>,
			node
		);

		expect(console.error.calls.count()).toBe(1);
		expect(console.error.calls.argsFor(0)[0]).toContain(
			'The prop `to` is marked as required in `Link`'
		);
	});
});

// Tests taken from official `react-router` tests.
describe('matchPath', () => {
	describe('with path="/"', () => {
		test('it returns correct url at "/"', () => {
			const path = '/';
			const pathname = '/';
			const match = matchPath(pathname, path);
			expect(match.url).toBe('/');
		});

		test('it returns the correct url at "/somewhere/else"', () => {
			const path = '/';
			const pathname = '/somewhere';
			const match = matchPath(pathname, path);
			expect(match.url).toBe('/');
		});
	});
});