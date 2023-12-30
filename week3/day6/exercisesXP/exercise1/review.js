// 🌟 Exercise 1 : List Of People
// Instructions

const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays
// 1 Write code to remove “Greg” from the people array.
 people.shift();
//2  Write code to replace “James” to “Jason”.
people.splice(2,1, 'Jason');
//3  Write code to add your name to the end of the people array.
people.push("Ariel");
//4 Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
const inMar = people.indexOf("Mary");
console.log(inMar);

//5  Write code to make a copy of the people array using the slice method.
    // The copy should NOT include “Mary” or your name.
    // Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
    // Hint: Check out the documentation for the slice method
const peopleDuplicate = people.slice(1,3);
console.log(peopleDuplicate);





// 6 Write code that gives the index of “Foo”. Why does it return -1 ?

const errorr = people.indexOf("Foo");
console.log(errorr);
//it returns negative 1 because Foo DNE w/ in array.


//7  Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

const array = [1,2,3];
const last = array[array.length -1];
console.log(last);




// Part II - Loops

// Using a loop, iterate through the people array and console.log each person.
for (let i=0; i < people.length; i++){
    console.log(people[i]);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for (let i=0; i < people.length; i++){
    console.log(people[i]);
    if (people[i]==="Devon"){
        break;
    }
}