// 🌟 Exercise 3 : Repeat The Question
// Instructions

// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// let answer = prompt("Give me a number! Any number!!");

// let guess = parseFloat(answer);


// While the number is smaller than 10 continue asking the user for a new number.



while (true){

    let answer = prompt("Give me a number! Any number!!");

    let guess = parseFloat(answer);


    if (guess > 10){
        break;
    } else if (guess < 10){
        alert("You can do better than that!");
        
    }
}
// Tip : Which while loop is more relevant for this situation?