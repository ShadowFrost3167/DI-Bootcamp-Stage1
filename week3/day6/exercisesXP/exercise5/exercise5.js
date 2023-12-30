// 🌟 Exercise 5 : Family
// Instructions

// Create an object called family with a few key value pairs.

const family = {
    father: 'Josh',
    mother: 'Golda',
    children : 'Ariel'

};

// Using a for in loop, console.log the keys of the object.

for (let key in family){
    console.log(key);
}

// Using a for in loop, console.log the values of the object.
for (let key in family){
    console.log(family[key]);
}