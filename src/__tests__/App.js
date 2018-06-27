import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

/*
 * Uses the `jest.mock` API that will pick up the mock module automatically.
 */
jest.mock('../utils/utils');

/*
 * Simulates an asynchronous behavior.
 * Adds the code that follows it to the end of the event loop queue.
 */
const flushPromises = () => {
  return new Promise(resolve, () => {
    setTimeout(resolve, 0);
  });
};

describe('The App component', () => {
  test('It shows the text "Loading..." before fetching the users', async () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();

    expect(text).toBe('Loading...');
  });
});
