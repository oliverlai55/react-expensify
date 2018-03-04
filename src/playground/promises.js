const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve({
		// 	name: 'Andrew',
		// 	age: 26,
		// });
		reject('Something went wrong!');
	}, 2000);
});

console.log('before');

promise.then(data => {
	console.log('1', data);
});

promise
	.then(data => {
		console.log('2', data);
	})
	.catch(err => {
		console.log('error: ', error);
	});

console.log('after');
