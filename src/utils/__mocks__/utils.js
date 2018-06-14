/*
 * Mocks the 'fetch' function from 'utils' with Jest native
 * mocking implementation.
 */

// Builds a user object, with the properties we want to test.
const fakeUser = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret'
};

/*
 * Returns a Promise that is resolved with the 'fakeUser'
 * object value.
 */
const fetchUser = jest.fn(url => {
  return Promise.resolve(fakeUser);
});

export default fetchUser;
