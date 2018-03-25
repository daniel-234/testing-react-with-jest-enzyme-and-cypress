import React from 'react';
import { shallow } from 'enzyme';
import User from '../components/user';
import * as utilsMock from '../utils/utils';

jest.mock('../utils/utils');

function nextTick() {
	return new Promise(resolve => {
		setTimeout(() =>{
			resolve();
		}, 0);
	});
}

// const fakeUser = {
// 	id: 1,
// 	name: 'Leanne Graham',
// 	username: 'Bret'
// };

// fetchMock = jest.fn(() => {
// 	return new Promise(resolve => resolve());
// });

test('it shows a loading text before fetching a user', async () => {
	// fetchMock();
	// jest.mock('../utils');

	const wrapper = shallow(<User id={1} />);
	const text = wrapper.find('p').text();

	expect(text).toBe('Loading...');
});

// test('it returns a the right User with name and username', async () => {
// 	fetchMock();
// 	console.log(mockFetch());
// 	await nextTick();
// 	const wrapper = shallow(<User />);
// 	const text = wrapper.find('p').text();

// 	expect(text).toEqual(fakeUser.username);
// });