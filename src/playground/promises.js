const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
			name: 'Andrew',
			age: 26,
		});
		reject('Something went wrong!');
	}, 5000);
});

console.log('before');

// promise.then(data => {
// 	console.log('1', data);
// });

promise
	.then(data => {
		console.log('2', data);
	})
	.then(() => {
		console.log('does this run??');
	})
	.catch(err => {
		console.log('error: ', err);
	});

console.log('after');
