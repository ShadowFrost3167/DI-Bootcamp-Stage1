// 🌟 Exercise 1: Your Favorite Food
// Instructions
// Store your favorite food into a variable.
let favFood = "Brownies"
// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
let favMeal = "lunch"
// Console.log I eat <favorite food> at every <favorite meal>
console.log("I eat "+favFood+ " at every "+ favMeal)
// For example

// If your favorite food is "chocolate", 
// and your favorite meal of the day is "dinner", 
// you will console.log 
// I eat chocolate at every dinner


//////////////////////////

// 🌟 Exercise 2 : Series
// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
let myWatchedSeriesLength = myWatchedSeries.length;

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
myWatchedSeriesSentence = '';

for (let i =0; i < myWatchedSeriesLength; i++) {myWatchedSeriesSentence+=myWatchedSeries[i];

//add spaces between words

if (i<myWatchedSeries.length -1){
    myWatchedSeriesSentence += ' ';
}}
// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

console.log("I watched 3 series: "+myWatchedSeriesSentence);

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.

myWatchedSeries[2]= "friends";

// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("A Series of Unfortunate Events");
// Add, at the beginning of the array, the name of your favorite series. 
myWatchedSeries.unshift("Dragon Ball")
// Delete the series “black mirror”.
myWatchedSeries.splice(1,1);
// Console.log the third letter of the series “money heist”.
let thirdLetter = myWatchedSeries[1][2];
console.log(thirdLetter);
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);


////////////////////////////////////////////////

// 🌟 Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.

let celTemp = 38;

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)

let fahrenTemp = (celTemp * 9/5)+32;
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

console.log(celTemp + "°C is " + fahrenTemp +"°F.");

//////////////////////////////////////////////////////////


// 🌟 Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// For example

// console.log(2+3)
// // Prediction: It will output 5, because 2 and 3 are numbers
// // Actual: 5


// Using the code below:

//     let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
//     // Prediction: it will output 55 because that's the sum of a and b's variables together.
//     // Actual: 55

    a = 2;

    console.log(a+b) //second expression
//     // Prediction: it will output 23 because a is changed to two and javascript reads top down. 
//     // Actual: 23



// What will be the outcome of a + b in the first expression ?  it will output 55 because that's the sum of a and b's variables together.
// What will be the outcome of a + b in the second expression ?  it will output 23 because a is changed to two and javascript reads top down. 
// What is the value of c? c is undefined? it hasn't been given a value?

// Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5'); 

//the terminal will output 75 because 7 is an integer and 5 is a string. 

//actual: 75


////////////////////////////////////////////////////////

// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.

// Then run the expression in the console of your browser (NOT IN VS CODE).

// Note the actual output in a comment and compare it with your prediction.



// For example

// typeof("potato")
// // Prediction: Vegetable
// // Actual: String


// What is the output of each of the expressions below?


typeof(15)
// // Prediction: integer
// // Actual: number

typeof(5.5)
// // Prediction: integer
// // Actual: number

typeof(NaN)
// // Prediction: not a number, undefined, NAN
// // Actual: number

typeof("hello")
// // Prediction: string
// // Actual: string

typeof(true) 
// // Prediction: boolean
// // Actual: boolean

typeof(1 != 2)
// // Prediction: boolean
// // Actual: boolean

"hamburger" + "s"
// // Prediction: string
// // Actual: string

"hamburgers" - "s"
// // Prediction: string
// // Actual: string

"1" + "3"
// // Prediction:  string
// // Actual: string

"1" - "3"
// // Prediction: string
// // Actual: string

"johnny" + 5
// // Prediction: string
// // Actual: string

"johnny" - 5
// // Prediction: string
// // Actual: number

99 * "hello"
// // Prediction: string
// // Actual: number

1 != 1
// // Prediction: boolean
// // Actual: boolean

1 == "1"
// // Prediction: boolean
// // Actual:  boolean

1 === "1"
// // Prediction: boolean
// // Actual: boolean


////////////////////////////////////////////////////////////////////////////////////////////////

// Exercise 6 : Guess The Answers #3
// Instructions
// For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.

// Then run the expression in the console of your browser (NOT IN VS CODE).

// Note the actual output in a comment and compare it with your prediction.



// What is the output of each of the expressions below?


// 5 + "34"
// // Prediction: 534, 5 is a number and then 34 is a string afterwards
// // Actual: 534

// 5 - "4"
// // Prediction: the console will try to convert 4 to a number so you'll get 1
// // Actual: 1

// 10 % 5
// // Prediction: 2 because 10/5=2
// // Actual: 0

// 5 % 10
// // Prediction: i don't know
// // Actual: 5

// " " + " "
// // Prediction: ""
// // Actual: blank space

// " " + 0
// // Prediction: 0 because the blak space won't display
// // Actual: 0

// true + true
// // Prediction: 2 true equals 1 so 1 + 1 = 2
// // Actual: 2

// true + false
// // Prediction: 1 because true is 1 and false is 0 so 1 +0=1
// // Actual: 1 

// false + true
// // Prediction: 1 becasue false is 0 and true is 1 same as above
// // Actual:1

// false - true
// // Prediction: -1, 0-1=-1
// // Actual:

// !true
// // Prediction: false
// // Actual: false

// 3 - 4
// // Prediction: -1
// // Actual: -1



