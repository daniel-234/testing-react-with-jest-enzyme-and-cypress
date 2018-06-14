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
    const TEXT = 'Welcome to Router testing!';
    const node = document.createElement('div');

    ReactDOM.render(<Route path="/" render={() => <h1>{TEXT}</h1>} />, node);

    expect(node.innerHTML).toContain(TEXT);
  });

  test('renders a path different from the root', () => {
    const TEXT = 'Oranges';
    const node = document.createElement('div');

    // Modify the state object of the current history entry.
    window.history.replaceState('fruits URL', 'fruits', '/fruits');

    ReactDOM.render(
      <Route path="/fruits" render={() => <h1>{TEXT}</h1>} />,
      node
    );

    expect(node.innerHTML).toContain(TEXT);

    // Set back the history state to the root URL.
    window.history.replaceState('root URL', 'root', '/');
  });

  test('does not render when it does not match', () => {
    const TEXT = 'Should not be rendered';
    const node = document.createElement('div');

    ReactDOM.render(
      <Route path="/trees" render={() => <h1>{TEXT}</h1>} />,
      node
    );

    expect(node.innerHTML).not.toContain(TEXT);
  });
});

describe('A Route Component', () => {
  test("renders automatically a component if it isn't given a path", () => {
    const TEXT = 'Welcome to Router testing!';
    const node = document.createElement('div');
    const Home = () => <div>{TEXT}</div>;

    ReactDOM.render(<Route component={Home} />, node);

    expect(node.innerHTML).toContain(TEXT);
  });
});

describe('A Route render prop', () => {
  test("renders automatically if it isn't given a path", () => {
    const TEXT = 'Welcome to Router testing!';
    const node = document.createElement('div');

    ReactDOM.render(<Route render={() => <div>{TEXT}</div>} />, node);

    expect(node.innerHTML).toContain(TEXT);
  });
});

describe('A Link', () => {
  test('accepts a location "to" prop', () => {
    const location = '/some/path';
    const node = document.createElement('div');

    ReactDOM.render(<Link to={location}>link</Link>, node);

    const href = node.querySelector('a').getAttribute('href');

    expect(href).toEqual('/some/path');
  });

  test('throws with no "to" prop', () => {
    const node = document.createElement('div');

    spyOn(console, 'error');

    ReactDOM.render(<Link>link</Link>, node);

    expect(console.error.calls.count()).toBe(1);
    expect(console.error.calls.argsFor(0)[0]).toContain(
      'The prop `to` is marked as required in `Link`'
    );
  });
});

// Tests taken from the official `react-router v4` repository.
describe('The matchPath function', () => {
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

  describe('with path="/somewhere"', () => {
    test('returns the correct url at "/somewhere"', () => {
      const path = '/somewhere';
      const pathname = '/somewhere';
      const match = matchPath(pathname, path);
      expect(match.url).toBe('/somewhere');
    });

    test('returns the correct url at "/somewhere/else"', () => {
      const path = '/somewhere';
      const pathname = '/somewhere/else';
      const match = matchPath(pathname, path);
      expect(match.url).toBe('/somewhere');
    });
  });

  describe('with an options object', () => {
    test('returns the correct url if there is a path', () => {
      const options = {
        path: '/somewhere'
      };
      const pathname = '/somewhere';
      const match = matchPath(pathname, options);
      expect(match.url).toBe('/somewhere');
    });

    test("renders automatically if there's no path", () => {
      const pathname = '/some/path';
      const match = matchPath(pathname);
      expect(match.url).toBe('/some/path');
    });

    test("returns null if there's no match", () => {
      const options = {
        path: '/some/path'
      };
      const pathname = 'another/path';
      const match = matchPath(pathname, options);
      expect(match).toBe(null);
    });

    test("returns null if there's no exact match", () => {
      const options = {
        path: '/some',
        exact: true
      };
      const pathname = '/some/path';
      const match = matchPath(pathname, options);
      expect(match).toBe(null);
    });
  });
});

describe('Integration Tests', () => {
  test('render multiple matching routes', () => {
    const TEXT1 = 'Apples';
    const TEXT2 = 'Oranges';
    const TEXT3 = 'Peaches';
    const node = document.createElement('div');

    ReactDOM.render(
      <div>
        <ul>
          <li>
            <Route path="/" render={() => <h1>{TEXT1}</h1>} />
          </li>
          <li>
            <Route path="/" render={() => <h1>{TEXT2}</h1>} />
          </li>
          <li>
            <Route path="/" render={() => <h1>{TEXT3}</h1>} />
          </li>
        </ul>
      </div>,
      node
    );

    expect(node.innerHTML).toContain(TEXT1);
    expect(node.innerHTML).toContain(TEXT2);
    expect(node.innerHTML).toContain(TEXT3);
  });

  test('render nested matches', () => {
    const TEXT1 = 'Apples';
    const TEXT2 = 'Oranges';
    const node = document.createElement('div');

    window.history.replaceState('nested URL', 'fruits', '/fruits');

    ReactDOM.render(
      <Route
        path="/"
        render={() => (
          <div>
            <h1>{TEXT1}</h1>
            <Route path="/fruits" render={() => <h2>{TEXT2}</h2>} />
          </div>
        )}
      />,
      node
    );

    expect(node.innerHTML).toContain(TEXT1);
    expect(node.innerHTML).toContain(TEXT2);

    window.history.replaceState('root URL', 'root', '/');
  });

  test('Renders only as deep as the matching Route', () => {
    const TEXT1 = 'Apples';
    const TEXT2 = 'Oranges';
    const node = document.createElement('div');

    ReactDOM.render(
      <Route
        path="/"
        render={() => (
          <div>
            <h1>{TEXT1}</h1>
            <Route path="/fruits" render={() => <h2>{TEXT2}</h2>} />
          </div>
        )}
      />,
      node
    );

    expect(node.innerHTML).toContain(TEXT1);
    expect(node.innerHTML).not.toContain(TEXT2);
  });
});
