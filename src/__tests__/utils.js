import fetchUser from '../utils/utils';

/*
 * This test has been written to test the API. It can be seen as
 * redundant in this application, as we've already tested it with a
 * mock inside our application.
 * The mock test, though, has been written under the hipothesis that
 * we didn't know the API implementation and we couldn't entirely
 * trust its functionality. Mocking it, we could know if it would
 * break in the future and stop working, making our application fail.
 *
 * This new test has been written to test the API, as if we were its
 * vendors. Having users or customers depending upon it, we should be
 * confident that it works.
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
