import * as firebase from 'firebase';
// takes all named exports from firebase and dumps them in a new variable 'firebase'

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

// set doesn't need to set an object, it can be a string if you want
// database.ref().set('This is my data');

// just accessing the age part
// database.ref('age').set(28);
// database.ref('location/city').set('Boston');

database
	.ref('attributes')
	.set({
		height: 73,
		weight: 150,
	})
	.then(() => {
		console.log('second set call worked.');
	})
	.catch(err => {
		console.log(err);
	});
