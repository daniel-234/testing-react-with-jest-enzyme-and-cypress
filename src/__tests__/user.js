import React from 'react';
import { shallow } from 'enzyme';
import User from '.././components/user';

test('it shows a loading text before fetching a user', () => {
	const wrapper = shallow(<User />);
	const text = wrapper.find('p').text();

	expect(text).toBe('Loading...');
});