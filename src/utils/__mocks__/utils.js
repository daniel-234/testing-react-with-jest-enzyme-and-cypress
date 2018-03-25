const fakeUser = {
	id: 1,
	name: 'Leanne Graham',
	username: 'Bret'
};

const fetchUser = jest.fn(url => {
	return Promise.resolve(fakeUser);
});

export default fetchUser;