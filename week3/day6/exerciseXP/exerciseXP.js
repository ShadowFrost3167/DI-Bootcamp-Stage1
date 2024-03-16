//  Exercise 1 : List Of People
// Instructions
const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
people.shift();
// Write code to replace “James” to “Jason”.
people.splice(2,1,"Jason");
// Write code to add your name to the end of the people array.
people.push("Ariel");

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
let mary = people.indexOf("Mary");
console.log(mary);
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
people.splice(mary, 1);

let ariel = people.indexOf("Ariel");
console.log(ariel);


people.splice(ariel, 1);

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

console.log(people);
// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.


//  Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
let favColours = ["Grey", "Green", "Jade", "Midori", "Sakura"];
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
let choices = ["1st", "2nd", "3rd", "4th", "5th"];
for (i=0; i <5; i++){
    console.log("My " +choices[i]+ " choise is: "+ favColours[i] )
}
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus


// 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
let randomNumber =0;



// While the number is smaller than 10 continue asking the user for a new number.
while (randomNumber <= 10) {
    randomNumber= prompt("Give me a number, any number!");
};
// Tip : Which while loop is more relevant for this situation?


// 🌟 Exercise 4 : Building Management
// Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.
console.log(building.numberOfFloors);
// Console.log how many apartments are on the floors 1 and 3.
console.log("Floor 1: "+building.numberOfAptByFloor.firstFloor+", Floor 3: "+building.numberOfAptByFloor.thirdFloor)

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log("Dan: ",building.numberOfRoomsAndRent.dan[0]);
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let danRent = building.numberOfRoomsAndRent.dan[1];

let sarahRent = building.numberOfRoomsAndRent.sarah[1];

let davidRent = building.numberOfRoomsAndRent.david[1];

if (sarahRent + davidRent > danRent){
    danRent += 1200;
    building.numberOfRoomsAndRent.dan[1] = danRent;
}
console.log(building);


// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
let family = {
    Father: "Joshuah",
    Mother: "Golda",
    Brother: "Abraham",
}
// Using a for in loop, console.log the keys of the object.
for (let key in family){
    console.log(key);
}
// Using a for in loop, console.log the values of the object.
for (let key in family){
    let value = family[key];
    console.log(value);
}


// Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let introduction = " "

for (let key in details){
    let value = " " + details[key]+ " ";
    introduction += key += value;
}
console.log(introduction);

// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

names.sort();
let acronym = ""
for (i=0; i < 5; i++){
    let firstInitial = names[i][0];
    acronym += firstInitial;
} console.log(acronym);
