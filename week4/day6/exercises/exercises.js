//EXERCISE1

// Analyse the code below without running it, what will be the output ?

var num = 8;
var num = 10;
console.log(num);

//i think the output will be 10 since it's the last definition given to the variable 'num'.

//Exercise 2

// Change the code so the var i will be undefined outside of the for loop

function numbers() {
    for (let i = 0; i < 5; i += 1) {
      console.log(i);
    }
    //   console.log(i);
  }
  numbers();

//   Exercise 3
//   You have to decide which type of variables you have to use
  
//   Create a global variable that save the amount of money you have in your account

var moneyOwned = 100;
let VAT = .17;
let expenses = 3000;
let revenue = 5000;

let vatAmount = expenses * VAT;

let balance = revenue - expenses - VAT;
console.log(balance);



//   Create a variable that saves the amount of VAT
//   Create a variable that saves the amout of all the expenses and revenu you did /received for the past last month
//   Create a JS code that multiplies of the expenses by the VAT
//   Create a JS code that changes the amount of the money you have in your account depending on your expenses/revenu.
//   Display it