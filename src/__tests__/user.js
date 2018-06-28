import React from 'react';
import { shallow } from 'enzyme';
import User from '../components/user';

test('It returns the right details of a user', () => {
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

  // Here we are targeting the third div in the User component,
  // that's the one that contains the 5 paragraphs.
  // Remember that the result of 'find' is zero-based.
  const thirdDiv = wrapper.find('div').at(2);
  const paragraph = wrapper.find('p');
  expect(thirdDiv.children()).toHaveLength(5);
  expect(paragraph.first().text()).toEqual('Username: Bret');
  expect(paragraph.at(3).text()).toEqual('City: Gwenborough');
});
