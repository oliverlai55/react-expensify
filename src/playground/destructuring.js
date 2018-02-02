// const person = {
// 	name: 'Andrew',
// 	age: 26,
// 	location: {
// 		city: 'NYC',
// 		temp: 90,
// 	},
// };
//
// const { name = 'Anonymous', age } = person;
// // default name value
// console.log(`${name} is ${age}`);
//
// const { city, temp: temperature } = person.location;
//
// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}`);
// }

//
// Array destructuring
//

const address = ['1299 S Juniper St', 'New York', 'NY', '10008'];

const [, city, state = 'CA'] = address;
// matching up with the position of the array you're pulling from
// use , if you're not pulling anything
// you can set default value

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

// grab first and third items using array destructuring
console.log(`A medium Coffee (hot) costs $2.50`);

const [itemName, , price] = item;

console.log(`A medium ${itemName} costs ${price}`);
