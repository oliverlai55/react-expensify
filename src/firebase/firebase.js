import * as firebase from 'firebase';
// takes all named exports from firebase and dumps them in a new variable 'firebase'
// https://firebase.google.com/docs/reference/js/firebase.database.Reference?authuser=1

const config = {
	apiKey: 'AIzaSyASXg9DkQ2Fhx-L269tFomHqXyUXGIDPCk',
	authDomain: 'expensify-25d10.firebaseapp.com',
	databaseURL: 'https://expensify-25d10.firebaseio.com',
	projectId: 'expensify-25d10',
	storageBucket: 'expensify-25d10.appspot.com',
	messagingSenderId: '342745996754',
};

firebase.initializeApp(config);

const database = firebase.database();

// ref gives us reference to a part of the database
database
	.ref()
	.set({
		name: 'Oliver Lai',
		age: 26,
		stressLevel: 6,
		job: {
			title: 'Software Developer',
			company: 'Google'
		},
		isSingle: true,
		location: {
			city: 'NYC',
			country: 'USA',
		},
	})
	.then(() => {
		console.log('data is saved');
	})
	.catch(err => {
		console.log('this failed', err);
	});

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

database.ref().update({
	stressLevel: 9,
	'job/company': 'Amazon',
	'location/city': 'Seattle',
})

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
