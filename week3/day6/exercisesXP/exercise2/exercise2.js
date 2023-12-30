// 🌟 Exercise 2 : Your Favorite Colors
// Instructions

// Create an array called colors where the value is a list of your five favorite colors.
let colors = ['Teal', 'Green', 'Brown', 'Grey', 'Japanese Pink'];
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

//loop where the console will log my number 1-5 choice is insert the index of the array
//with each loop the index increases from 0-5.
function cycleArray(arr){
    let index =0;

    return function(){
        if (index >= arr.length){
            index= 0;
        }
        return arr[index++];
    }
}


let choices = ['1', '2', '3', '4', '5'];

let choose = cycleArray(choices);
let cycle = cycleArray(colors);

for  (let i=0; i <=4; i++){
    console.log("My #" + choose() + " choice is " + cycle());
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.

let dickens = ['1st', '2nd', '3rd', '4th', '5th'];

let charles = cycleArray(dickens);

for (let i=0; i<=4; i++){
    console.log("My "+ charles()+ " choice is "+ cycle());
}

// Hint : create an array of suffixes to do the Bonus