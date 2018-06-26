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
const flushPromises = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
};

// TODO
//
// decide about showing a 'loading' text later, otherwise delete it
//
// test('it shows a loading text before fetching a user', async () => {
//   const wrapper = shallow(<User id={1} />);
//   const text = wrapper.find('p').text();

//   expect(text).toBe('Loading...');
// });

test('it returns the right username once the data has been fetched', async () => {
  const fakeUser = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    address: {
      city: 'Gwenborough'
    },
    phone: '1-770-736-8031 x56442',
    company: {
      name: 'Romaguera-Crona'
    }
  };

  const wrapper = shallow(<User user={fakeUser} />);

  await flushPromises();
  wrapper.update();

  console.log(
    wrapper
      .find('div')
      .at(2)
      .children()
  );
  // Here we are targeting the third div in the User component,
  // that's the one that contains the 5 paragraphs.
  // Remember that the result of 'find' is zero-based.
  const thirdDiv = wrapper.find('div').at(2);
  const paragraph = wrapper.find('p');
  expect(thirdDiv.children()).toHaveLength(5);
  expect(paragraph.first().text()).toEqual('Username: Bret');
  expect(paragraph.at(3).text()).toEqual('City: Gwenborough');
});
