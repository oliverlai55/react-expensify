import * as firebase from 'firebase';
// takes all named exports from firebase and dumps them in a new variable 'firebase'
// https://firebase.google.com/docs/reference/js/firebase.database.Reference?authuser=1

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// change children
// database.ref('expenses').on('child_changed', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// child_added, fired every time when child is added.
// database.ref('expenses').on('child_added', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// 	.once('value')
// 	.then(snapshot => {
// 		const expenses = [];
// 		snapshot.forEach(childSnapshot => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val(),
// 			});
// 		});
//
// 		console.log(expenses);
// 	});

// database.ref('expenses').on('value', snapshot => {
// 	const expenses = [];
// 	snapshot.forEach(childSnapshot => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val(),
// 		});
// 	});

// 	console.log(expenses);
// });
// database.ref('expenses').push({
// 	description: 'Rent',
// 	note: '',
// 	amount: 109500,
// 	createdAt: 23453,
// });

// database.ref('notes').push({
// 	title: 'To Do',
// 	body: 'Go for a run'
// });
//
// database.ref('notes').push({
// 	title: 'To Do2',
// 	body: 'Go for a walk'
// });
//
// database.ref('notes/L6sP8ihaBjHibW4-kmZ').update({
// 	body: 'Buy food',
// });

// database.ref('notes').set(notes);
// ref gives us reference to a part of the database
// database
// 	.ref()
// 	.set({
// 		name: 'Oliver Lai',
// 		age: 26,
// 		stressLevel: 6,
// 		job: {
// 			title: 'Software Developer',
// 			company: 'Google'
// 		},
// 		isSingle: true,
// 		location: {
// 			city: 'NYC',
// 			country: 'USA',
// 		},
// 	})
// 	.then(() => {
// 		console.log('data is saved');
// 	})
// 	.catch(err => {
// 		console.log('this failed', err);
// 	});

// database.ref()
// 	.remove()
// 	.then(() => {
// 		console.log('data was removed');
// 	}).catch((e) => {
// 		console.log('did not remove data', e);
// 	});

// another way to remove data
// database.ref('isSingle').set(null);

// database.ref().update({
// 	name: 'Mike',
// 	age: 29,
// 	job: 'Software Developer',
// 	isSingle: null,
// });

// just to update property wtihin a nested object
// database.ref().update({
// 	job: 'Manager',
// 	'location/city': 'Boston',
// })

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle',
// })

// set doesn't need to set an object, it can be a string if you want
// database.ref().set('This is my data');

// just accessing the age part
// database.ref('age').set(28);
// database.ref('location/city').set('Boston');

// database
// 	.ref('attributes')
// 	.set({
// 		height: 73,
// 		weight: 150,
// 	})
// 	.then(() => {
// 		console.log('second set call worked.');
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

// GRAB DATA
// database.ref()
// 	.once('value')
// 	.then(snapshot => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch(e => {
// 		console.log('Error fetching data', e);
// 	});

// This checks for subscription of value changes ('.on')
// const onValueChange = database.ref().on('value', snapshot => {
// 	console.log(snapshot.val());
// }, e => {
// 	console.log('Error with data fetching', e);
// });

// setTimeout(() => {
// 	database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
// 	database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 10000);

// database.ref().on('value', snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }
