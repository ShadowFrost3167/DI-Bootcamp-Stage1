// 🌟 Exercise 3 : Find The Numbers Divisible By 23
// Instructions

// Create a function call isDivisible() that takes no parameter.

function isDivisible(){
    let divBy23 = [];

    for (let i=0; i<500; i++){
    
        if (i%23===0){
            divBy23.push(i);
        }

    }
    return divBy23;
}

const divisiblee=isDivisible();
let sum =0;

for (let i=0; i<divisiblee.length; i++){
    sum += divisiblee[i];
}

console.log(isDivisible());
console.log(sum);
  

// In the function, loop through numbers 0 to 500.


// Console.log all the numbers divisible by 23.


// At the end, console.log the sum of all numbers that are divisible by 23.


// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313



// Bonus: Add a parameter divisor to the function.


// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum