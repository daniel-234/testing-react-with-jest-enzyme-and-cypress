import React from 'react';
import { shallow } from 'enzyme';
import User from '../components/user';
import * as utilsMock from '../utils/utils';

/*
 * Uses the `jest.mock` API that will pick up the mock module automatically.
 */
jest.mock('../utils/utils');

/*
 * Simulates an asynchronous behavior.
 * Adds the code that follows it to the end of the event loop queue.
 */
function nextTick() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}

test('it shows a loading text before fetching a user', async () => {
  const wrapper = shallow(<User id={1} />);
  const text = wrapper.find('p').text();

  expect(text).toBe('Loading...');
});

test('it returns the right username once the data has been fetched', async () => {
  const wrapper = shallow(<User id={1} />);

  await nextTick();
  wrapper.update();

  const text = wrapper.find('p.username').text();
  expect(text).toEqual('Bret');
});
