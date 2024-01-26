// 🌟 Exercise 1 : Location
// Instructions

// Analyze the code below. What will be the output?

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


//---ANSWER----
//the output will be the console logging: I am John Doe from Vancouver, Canada. Latitude 49.2827, Longitude -123.1207








// 🌟 Exercise 2: Display Student Info
// Instructions

function displayStudentInfo(objUser){
    let {first, last}= objUser;
    let output = `Your full name is ${first} ${last}`;
    return output;
}

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

let final = displayStudentInfo({first: "Elie", last: "Schoppik"});
console.log(final);
// Using the code above, *destructure* the parameter inside the function and return a string as the example seen below:

// //output : 'Your full name is Elie Schoppik'





// 🌟 Exercise 3: User & Id
// Instructions

// Using this object 

const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersTZ = Object.entries(users).map(([key, value])=>[key, value*2]);

console.log(usersTZ);

    // Using methods taught in class, turn the users object into an array:

    // Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
    // FYI : The number is their ID number.


// Modify the outcome of part 1, by multipling the user’s ID by 2.

// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]







// Exercise 4 : Person Class
// Instructions

// Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

//i think it will console log object because member is another object based on Person which is a class = object









// 🌟 Exercise 5 : Dog Class
// Instructions

// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


//   // 2 --------------THIS ONE------------------------
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

//my answer is #2











// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}

//i think they will return false


// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
//5 because it's defined as such const obj1={key: value}
const object2 = object1; 
//5 because obj2's been set to the same as obj1
const object3 = object2; 
//5 same reasoning as obj2
const object4 = { number: 5};
//5 because of the same reasoning as obj1
object1.number = 4;
//this changes the value of the key "number" to 4 from 5 which also changes the values of obj2 obj3 as well since they are defined by obj1 which ahs just changed
console.log(object2.number)
//4 because of change to obj1
console.log(object3.number)
//4 because of obj2 is 4 since obj1 is 4
console.log(object4.number)
//5 because obj4 is not dependant on obj1 for a value it's defined on it's own as 5


// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal{
    constructor(name, type, color){
        this.name=name;
        this.type=type;
        this.color=color;
    }
}

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal{
    constructor(name, type, color){
        super(name, type, color);
    }
    sound(noise){
        return `This ${this.color} ${this.type} named ${this.name} ${noise}s loudly`;
    }
}

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.

const farmerCow = new Mamal("Betsy", "cow", "black and white");
console.log(farmerCow.sound("moo"));
// For example: Moooo I'm a cow, named Lily and I'm brown and white