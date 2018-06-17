import fetchUser from '../utils/utils';

/*
 * Test the API.
 *
 * The two tests are identical and they have been written using both
 * Promises and an Async/Await, to practice them both.
 * I wrote a possible duplicate test because of the learning purpose
 * of this application. You can use whatever solution you prefer.
 *
 */

const urlForUser1 = 'https://jsonplaceholder.typicode.com/users/1';

/*
 * Test the API using Async/Await.
 */
test('it fetches the correct data', async () => {
  expect.assertions(1);

  const data = await fetchUser(urlForUser1);
  expect(data.username).toBe('Bret');
});

/*
 * Test the API using Promises.
 */
test('it fetches the correct data', () => {
  expect.assertions(1);

  return fetchUser(urlForUser1).then(data => {
    expect(data.username).toBe('Bret');
  });
});
