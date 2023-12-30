// 🌟 Exercise 1 : Information
// Instructions

// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.

function infoAboutMe(){
    console.log("I'm Ariel, 29, and like playing go, videogames, and doing art.")
}

infoAboutMe();
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.


// Part II : function with three parameters


function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("Your name is "+personName+" you are "+personAge+" years old, and your favourite color is " + personFavoriteColor);
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)

// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")