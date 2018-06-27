/*
 * Mocks the 'fetch' function from 'utils' with Jest native
 * mocking implementation.
 */

// Builds a user object, with the properties we want to test.
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

/*
 * Returns a Promise that is resolved with the 'fakeUser'
 * object value.
 */
const fetchUsersList = jest.fn(url => {
  return Promise.resolve(fakeUsersList);
});

export default fetchUsersList;
