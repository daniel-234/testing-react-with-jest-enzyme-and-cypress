import React from 'react';
import renderer from 'react-test-renderer';
import UserItem from '../../components/user-item';

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

/*
 * An example of snapshot test. 
 * To see it failing, just type a letter in the first paragraph
 * of the component. 
 */
test('It renders correctly the user details', () => {
  const wrapper = renderer.create(<UserItem user={fakeUser} />).toJSON();

  expect(wrapper).toMatchSnapshot();
});
