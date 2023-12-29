// 🌟 Exercise 2 : Series
// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory


// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = (myWatchedSeries.length);
let myWatchedSeriesSentence = (": black mirror, money heist, and the big bang theory");

console.log("I watched "+myWatchedSeriesLength + " series " + myWatchedSeriesSentence);

//part 2 of exercise starts here:
//i used chatgpt to look up the method to change the last part of the array with splicing. but it wasn't really clicking, it might make more sense to me later on today when i watch the video you sent on js for me to watch for catchup. in the meantime i wanted to try to do the second part of this exercise with just pop, push, pull methods.

    //let removedElement = myWatchedSeries.pop();

    //checking to make sure it removed the last element - the big bang theory
    // console.log(removedElement);
    // console.log(myWatchedSeries);

//looked again at splicing and concentrated on it for about 20 minutes till it clicked. also utilized chatgpt to understand how the method is structured more clearly.



// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.


//copied the code and instructions down here and commented out so i wouldn't have to scroll up as much. 
//ctsiw - checking to see if worked


        // const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

        // let myWatchedSeriesLength = (myWatchedSeries.length);
        // let myWatchedSeriesSentence = (": black mirror, money heist, and the big bang theory");

        // console.log("I watched "+myWatchedSeriesLength + " series " + myWatchedSeriesSentence);



myWatchedSeries.splice(2, 1, "friends");

//ctsiw 
//console.log(myWatchedSeries);

myWatchedSeries.push("Demon Slayer");

//ctsiw 
// console.log(myWatchedSeries);

myWatchedSeries.unshift("Ranma 1/2");

//ctsiw 
// console.log(myWatchedSeries);

myWatchedSeries.splice(1,1);
//ctsiw
//console.log(myWatchedSeries);

let n = myWatchedSeries[1] [2];
console.log(n);

console.log(myWatchedSeries);