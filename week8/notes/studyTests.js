//     let obj1 = {name: 'shadow', password:'123'};
//     let obj2 = obj1;

//     obj2.password = "easypeasy";

//     console.log(obj1);
//     console.log(obj2);

//     var c = [1,2,3,4,5];
//     var d = [].concat(c);
//     d.push(15);
//     console.log(d);
//     console.log(c);

//     let obj = {a: "a", b: "b", c: {deep: "try and copy me"}};
// // //how to get this obj in different location and memory
//     let clone = Object.assign({}, obj);
//     //or
//     let clone2 = {...obj};

// //ONLY CLONES THE FIRST LAYER OF THE OBJ
// //HOW TO DEEP CLONE
// // use JSON
//     let superClone = JSON.parse(JSON.stringify(obj));

//     obj.c.deep = "hahaha";
//     console.log(obj);
//     console.log(clone);
//     console.log(clone2);




// console.log(superClone);


// Object.is(-0,+0);



// ///TYPE COERCIAN IS REALLY TRICKY AND ANNOYING TO AVOID IT USE === INCESTEAD OF ==

// let kiloInGrams = (num)=> num*1000;
// let answer = kiloInGrams(5);
// console.log(answer);
// // //let numbersAdded is declaring the name of the function 
// // // (numFirst, numSecond) are the two paramaters of the function
// // //=> is like saying what you want to do with the parameters
// // //numFirst+numSecond just puts the sum of whatever is put in the 2 parameters

//     // console.log(numbersAdded("hello ", "world"));
//     // // //will console log hello world since the inputs are strings
//     // numbersAdded(1,2);

//     // console.log(numbersAdded(1,2));






// // .
// // .
// // .
// // .
// // .
// // .
// // .
// // .
// // .
// // .
// // .

// // Instructions
// // Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// (function(amountChildren, partnerName, location, jobTitle){
//     const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${amountChildren} kids.`;
//     document.write(fortune);

// })(5, "Judah", "Jerusalem", "Full Stack Developer");

// // The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// //TOOK FOREVER TO FIGURE OUT BUT YOU MUST USE ` FOR THESE STRINGS INSTEAD OF "" OR '' 

// const array = [1,2,10,16];

// const double = [];
// const newArray = array.forEach((num)=> {
//     double.push(num*2);
// })

// console.log(double);

// //map, filter, and reduce

// //used in loops usually

// const mapArray = array.map(num=> num*2);
// console.log(mapArray);


// const filterArray = array.filter(num=>  num > 5);
// console.log(filterArray);

// const reduceArray = array.reduce((accumulator, num)=>{
//     return accumulator + num
// }, 0);

// console.log(reduceArray);



// //EXAMPLES OF THIS IN EXERCISES

// const users = 
//             [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const welcomeMessage = users.map(user=>`Hello ${user.firstName}`);  
// console.log(welcomeMessage);

// //Using the map() method, push into a new array the firstname of the user and a welcome message. 

// const fullStackOnly = users.filter(user=>user.role===`Full Stack Resident`);
// console.log(fullStackOnly);

// //2. Using the filter() method, create a new array, containing only the Full Stack Residents.


// const lastNameStacks = users.filter(user=>user.role=== `Full Stack Resident`).map(user=>user.lastName);
// console.log(lastNameStacks);

// //3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.


// // Instructions
// // Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// // Use the reduce() method to combine all of these into a single string.
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const intro = epic.reduce((accumulator, element)=>{
//     return accumulator + ' '+ element;
// }, "a");
// console.log(intro);


// //how to make a function that returns true if all paramenters are true.
// //spread operator?
//         // let a =10;
//         // let b = 20;
//         //     let rest = [30,40,50];
//         //     let z = [a, b, ...rest];
//             // console.log(z);


//     let arr = [10, 20, 30, 40, 59];
//     // const [a, b, ...d] = arr;


//     // let obj ={
//     //     name: "aaa",
//     //     email: "fjdskalsjd",
//     // };

//     // const {name, email} = obj;

//     function AllTruthy(a, b, c, ...rest){
//         return arr.every(item=> item===true)
//     }


//     const allTruthy = (...arr)=> arr.every((item)=> item);

//     //OBJECTS AND CLASSES

//     let key = 'lastname'

//     let subj ={
//         [key]: "value",
//         name: "sam",
//         age: 28,
//         married: true,
//         pets: ["dog", "cat", "bird"],
//         adress: {
//             city: "Tel aviv",
//             country: "Israel"
//         },
//         sayHello: function(){
//             return "Hello";
//         }
//     };
// console.log(subj);

// // let name = subj.name;
// // console.log(name);

// // let age = obj["age"];
// // console.log(age);

// const {age,name, pets:[a,b], adress:{city, country}, sayHello} = subj;
// console.log(age,name, a, b);


// //how can i make the key dynamic within subj?
// //see line 183.

// console.log(obj.aaa, obj["aaa"], obj[key]);



// function getinfo(myobj){
//     console.log(myobj);
// }
// getinfo(obj)









































// //making a class

// // class Video{
// //     constructor(title,uploader,time){
// //         this.title=title;
// //         this.uploader= uploader;
// //         this.time= time;
// //     }
// // }
// // watch(){
// //     console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
// // };

// // const video1 = new Video("Harry Potter", "YoutuberOne", 120);
// // video1.watch();

// // const video2 = new Video("Harry Potter One", "YoutuberTwo", 60);
// // video2.watch();

// // const videoarr= [
// //     {title:"a", uploader: "aa", time:1 },
// //     {title:"b", uploader: "bb", time:1 },
// //     {title:"c", uploader: "cc", time:1 },
// //     {title:"d", uploader: "dd", time:1 },
// //     {title:"e", uploader: "ee", time:1 },
// //     {title:"f", uploader: "ff", time:1 },
// //     {title:"g", uploader: "gg", time:1 }

// // ];

// // videoarr.forEach(item,i,arr => {
// //     arr[i] = new Video(item.title, item.uploader, item.time)
// // });

// // console.log(videoarr);

// // videoarr.forEach(item=>{
// //     item.watch();
// // });













// //JSON



// // const product = `[
// //     {
// //         "product_id":2,
// //         "product_name":"iPhone16",
// //         "price":12000,
// //         "description":"The new iPhone 16"
// //     }
// // ]`;

// // console.log(product);

// // const pruductObj = JSON.parse(product);
// // console.log(pruductObj[0]);
// // const { product_id, product_name, price, description } = pruductObj[0];

// // document.getElementById("root").innerHTML = `
// //         <h1>${product_name}</h1>
// //         <h2>${price}</h2>
// //         <h3>${description}</h3>`;

// // let user= [
// //     {id: 1, username: "george", creditCard: 12345643642432346}
// // ];


// // //we can manipulate the JSON through here to hide certain information etc.?
// // const replacer = (key, value)=> {
// //     if(key === "creditCard"){
// //         return undefined
// //     }else{
// //         return value;
// //     }
// // }
// // console.log(JSON.stringify(users));
// //if you want your json to look pretty you can add null, 2 to the (users,)






// class Player{
//     constructor(name, type){
//         console.log('player', this);
//         this.name =name;
//         this.type=type;
//     }
//     introduce(){
//         console.log(`Hi I am ${this.name}, I'm a ${this.type}!`)
//     }
// }


// class Wizard extends Player{
//     constructor(name, type){
       
//         super(name, type)
//         console.log("wizard", this);
//     }
//     play(){
//         console.log(`Wee! I'm a ${this.type}`);
//     }
// }

// const wizard1= new Wizard('Shelly', 'Healer');
// const wizard2= new Wizard('Sean', 'Dark Magic');



// let obj={
//     username0: 'Santa',
//     username1: 'Peter',
//     username2: 'Paul'
// }

// Object.values(obj).forEach((key,index)=>{
//     console.log(key, obj[key]);
// })

// Object.values(obj).forEach(value=>{
//     console.log(value);
// })

// Object.entries(obj).forEach(value=>{
//     console.log(value);
// })

// Object.entries(obj).map(value=>{
//     return value[1]+value[0].replace('username', '');
// })




//object spread operator ...

// const animals={
//     tiger: 23,
//     lion:5,
//     monkey:2,
//     bird: 40
// }

// function objectSpread(p1,p2,p3){
//     console.log(p1)
//     console.log(p2)
//     console.log(p3)
// }


// const {tiger,lion, ...rest}=animals;

// objectSpread(tiger, lion, rest, )

    // const array=[1,2,3];
    // function sum(a, b, c){
    //     return a+ b+ c;
    // }

//w/n console:
// sum(...array);



