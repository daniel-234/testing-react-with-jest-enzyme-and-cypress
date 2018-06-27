import React from 'react';
import { shallow } from 'enzyme';
import UsersList from '../components/users-list';

const fakeUsersList = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha'
  }
];

test('Users list test', () => {
  const wrapper = shallow(<UsersList users={fakeUsersList} />);

  expect(wrapper.find('p').text()).toEqual(
    'Here is a list of users. Click a link for more details.'
  );
});
