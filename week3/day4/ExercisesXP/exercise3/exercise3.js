// 🌟 Exercise 3: Even Or Odd
// Instructions

// Prompt the user for a number and save it to a variable.

// Check whether the variable is even or odd.

// If it is even, display: “x is an even number”. Where x is the actual number the user chose.

// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

let reply = prompt("Give me a number any number!");
let sop = parseFloat(reply);

var answer = sop;

if (answer % 2 === 0){
    alert(answer + " is an even number");
}
else{
    alert(answer + " is an odd number");
}

// i referenced the exercises i did in the day3 section earlier to figure out this exercise, also utilized google and chatgpt when i was rusty about how certain things fit together. 