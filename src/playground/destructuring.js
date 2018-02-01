const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'NYC',
    temp: 90
  }
};

const { name = 'Anonymous', age } = person;
// default name value
console.log(`${name} is ${age}`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}
