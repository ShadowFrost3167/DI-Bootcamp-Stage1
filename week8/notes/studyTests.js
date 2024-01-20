    let obj1 = {name: 'shadow', password:'123'};
    let obj2 = obj1;

    obj2.password = "easypeasy";

    console.log(obj1);
    console.log(obj2);

    var c = [1,2,3,4,5];
    var d = [].concat(c);
    d.push(15);
    console.log(d);
    console.log(c);

    let obj = {a: "a", b: "b", c: {deep: "try and copy me"}};
// //how to get this obj in different location and memory
    let clone = Object.assign({}, obj);
    //or
    let clone2 = {...obj};

//ONLY CLONES THE FIRST LAYER OF THE OBJ
//HOW TO DEEP CLONE
// use JSON
    let superClone = JSON.parse(JSON.stringify(obj));

    obj.c.deep = "hahaha";
    console.log(obj);
    console.log(clone);
    console.log(clone2);




console.log(superClone);


Object.is(-0,+0);



///TYPE COERCIAN IS REALLY TRICKY AND ANNOYING TO AVOID IT USE === INCESTEAD OF ==

let kiloInGrams = (num)=> num*1000;
let answer = kiloInGrams(5);
console.log(answer);
//let numbersAdded is declaring the name of the function 
// (numFirst, numSecond) are the two paramaters of the function
//=> is like saying what you want to do with the parameters
//numFirst+numSecond just puts the sum of whatever is put in the 2 parameters

console.log(numbersAdded("hello ", "world"));
//will console log hello world since the inputs are strings
numbersAdded(1,2);

console.log(numbersAdded(1,2));






// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
(function(amountChildren, partnerName, location, jobTitle){
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${amountChildren} kids.`;
    document.write(fortune);

})(5, "Judah", "Jerusalem", "Full Stack Developer");

// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

//TOOK FOREVER TO FIGURE OUT BUT YOU MUST USE ` FOR THESE STRINGS INSTEAD OF "" OR '' 