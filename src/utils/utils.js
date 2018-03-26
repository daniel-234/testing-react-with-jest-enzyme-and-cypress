/*
 * Gets the user data from a given url.
 */

async function fetchUser(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

export default fetchUser;