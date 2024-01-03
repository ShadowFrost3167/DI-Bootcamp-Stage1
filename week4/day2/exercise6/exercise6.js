// 🌟 Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().

function hotelCost(){
   let userInput;
   do{ 
    
    userInput = parseInt(prompt("How long would you like to stay with us?"));

    if (isNaN(userInput)){
        alert("Please enter a valid number.");

    }
    } while(isNaN(userInput));

   let price = userInput * 140;

        console.log("Your stay with us will cost a total of " + price);
        return price;
    }

//hotelCost();

// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.








// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$


function planeRideCost(){

    let userInput;

   do{
    userInput= prompt("Where do you want to go?");

        if(typeof userInput !== 'string'){
            alert("I'm sorry, I don't know where that is, where do you want to go?");
        } }
    while (typeof userInput !== 'string');

    switch (planeRideCost){
        case 'London':
            return 183;
        case 'Paris':
            return 220;
        default:
            return 300;
    }}


 //initially i tried to solve it with this if else statment but it didn't work : 

//     if (userInput == 'London'){
//         console.log("That will be 183 USD");
//     }
//     else if (userInput == 'Paris'){
//         console.log("That will be 220 USD");
    
//     }
//     else{
//         console.log("That will be 300 USD");
//     }
    
// }
// planeRideCost();

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.


function rentalCarCost(){
    let userInput;

    do{ 
    
        userInput = parseInt(prompt("How long do you need a car for rent?"));
    
        if (isNaN(userInput)){
            alert("Please enter a valid number.");
    
        }
        } while(isNaN(userInput));
    
       let carPrice = userInput * 40;


            if (userInput>= 10){
                carPrice -= carPrice * .05
            }
        
                console.log("The car will cost you " + carPrice);
                return carPrice;
            }
       // rentalCarCost();






// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly


function totalVacationCost(){

    let hotelInfo = parseInt(prompt("How long do you need a car for rent?"));
    let place = prompt("Where do you want to go?");
    let driveCost = parseInt(prompt("How long do you need a car for rent?"));

    let hotelPrice = hotelCost(hotelInfo);
    let planePrice = planeRideCost(place);
    let driving = rentalCarCost(driveCost);

    let sumTotal = hotelPrice + planePrice + driving;

    console.log("Your total vacation will add up to "+ sumTotal);
    console.log("The car cost: " + driving + ", the hotel cost: "+ hotelPrice + " the plane tickets cost: "+ planePrice);
}
totalVacationCost();