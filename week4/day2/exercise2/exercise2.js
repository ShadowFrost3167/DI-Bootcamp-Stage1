// 🌟 Exercise 2 : Tips
// Instructions

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.



// Create a function named calculateTip() that takes no parameter.

function calculateTip(){
    let bill = prompt("how much is the bill?");
    bill=parseFloat(bill);
    let tip=0;
    let final=0;

    if(bill<50){
         tip = bill *.2;
         final = bill + tip;
    }
    else if(bill>50 && bill<200){
         tip = bill* .15;
         final = bill +tip;

    }
    else{
         tip=bill*.1;
         final=bill+tip;
    }

    console.log("The bill and tip are:" + final);
}

calculateTip();

// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.