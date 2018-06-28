import React from 'react';
import { shallow } from 'enzyme';
import UserItem from '../components/user-item';

test('A user is displayed as a list item', () => {
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

  const wrapper = shallow(<UserItem user={fakeUser} />);

  expect(
    wrapper
      .find('div')
      .at(1)
      .children()
      .first()
      .text()
  ).toEqual('Leanne Graham');
});
