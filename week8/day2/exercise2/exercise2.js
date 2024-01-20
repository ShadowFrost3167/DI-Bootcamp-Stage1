// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// this was what i did at the beginning of hte exercise before doing 1-3

//let kiloInGrams = (num)=> num*1000;

// First, use function declaration and invoke it.

function declaration(num){
    return num*1000;
}

let result = declaration(2);
console.log(result);
// Then, use function expression and invoke it.

let converter = function(num){
    return num * 1000;
};
let expressResult = converter(2);
console.log(expressResult);
// Write in a one line comment, the difference between function declaration and function expression.

//a function declaration is like setting the function plainly and then a function expression stores that function within a variable of some kind.

// Finally, use a one line arrow function and invoke it.

let kiloInGrams = (num)=> num*1000;
let answer = kiloInGrams(5);
console.log(answer);
