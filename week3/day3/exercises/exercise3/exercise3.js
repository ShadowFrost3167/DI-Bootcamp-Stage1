// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it



let a = 2 + 2;
// again change let a = 2+2 to requesting the user to input something with a prmpt. so:
// let userInput= prompt("2+2?");
// let num = parseFloat(userInput);

switch (a) {
    //change switch 'a' to 'num' to be able to make the alerts given specified to the input from the user. 
    // switch (num){...}
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

//================================================
//-------ANSWER------------------------
//================================================


// let userInput= prompt("2+2?");
// let num = parseFloat(userInput);

// //there will be a prompt when you load the page asking '2+2?' with an input bar. whatever is inputed will be converted to a numeric value.

// switch(num) {
//     case 4:
//     alert('Right!');
//     break;
//     //if the user inputs 4 an alert will appear saying 'right!'

//   case 3: 
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     //I think here there will be one alert of 'Wrong!' and then after the user closes that alert another alert will appear saying 'Why don't you take a math class?'
//     break;

//   default:
//     alert('The result is strange. Really.');
//     //for any other input the alert appearing will say 'the result is strange. really.'
// }

