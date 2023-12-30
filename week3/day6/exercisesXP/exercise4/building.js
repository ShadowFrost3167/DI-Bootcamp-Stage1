// 🌟 Exercise 4 : Building Management
// Instructions:



    // const building = {
    //     numberOfFloors: 4,
    //     numberOfAptByFloor: {
    //         firstFloor: 3,
    //         secondFloor: 4,
    //         thirdFloor: 9,
    //         fourthFloor: 2,
    //     },
    //     nameOfTenants: ["Sarah", "Dan", "David"],
    //     numberOfRoomsAndRent:  {
    //         sarah: [3, 990],
    //         dan:  [4, 1000],
    //         david: [1, 500],
    //     },
    // }



// Review About Objects

// Copy and paste the above object to your Javascript file.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
     nameOfTenants: ["Sarah", "Dan", "David"],
     numberOfRoomsAndRent:  {
        sarah: [3, 990],
         dan:  [4, 1000],
         david: [1, 500],
     },
}

    // just to understand the object of building i'm writing it out like this here for visual aid
    //building = numOfFloor[0], numOfApt[0-3], nameTenant[0-2], numOfRooms[0-2] 

// Console.log the number of floors in the building.
console.log(building.numberOfFloors);
//initially i tried to call the key like an array spent a good 10 minutes trying to figure out what was going wrong.



// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

let cost = (building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]);

if (cost > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1]=1200;
    console.log("Dan's rent increased to 1200");
    
}
else{
    console.log("Dan's rent is fair", building.numberOfRoomsAndRent.dan[1]);
}

