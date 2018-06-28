import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import * as utilsMock from '../utils/utils';

/*
 * We don't want to make a real http request in our unit tests, because they
 * will cause them to be very slow. These kind of tests will be used in our
 * end to end tests.
 * For now we just want to make sure that our component works as it is supposed
 * to and that the API has been called properly. 
 * So we need to mock the API that the real component calls. 
 * 
 * Uses the `jest.mock` API that will pick up the mock module automatically.
 */
jest.mock('../utils/utils');

/*
 * Simulates an asynchronous behavior.
 * Adds the code that follows it to the end of the event loop queue.
 */
const flushPromises = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
};

describe('The App component', () => {
  test('It shows the text "Loading..." before fetching the users', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();

    expect(text).toBe('Loading...');
  });

  test('The users array in the component state is still empty', () => {
    const wrapper = shallow(<App />);
    const state = wrapper.state();

    expect(state.users).toEqual([]);
  });

  test('Updates the component state once the data has been fetched', async () => {
    const wrapper = shallow(<App />);

    await flushPromises();
    wrapper.update();

    const state = wrapper.state();

    expect(state.users).toHaveLength(3);
    expect(state.users[1]).toEqual({
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette'
    });
  });
});
