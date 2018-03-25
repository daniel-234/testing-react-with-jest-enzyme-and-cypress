// const urlForAPI = 'https://jsonplaceholder.typicode.com/users/';

// const getUrl = id => (
// 	`urlForAPI${id}`
// );

async function fetchUser(url) {
	const response = await fetch(url);
	const data = await response.json();
	// const name = data.name
	// console.log(name);
	return data;
}

export default fetchUser;