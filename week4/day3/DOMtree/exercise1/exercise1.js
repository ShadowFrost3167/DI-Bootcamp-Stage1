



// {/* <html>
// <body>
//   <div>Users:</div>
//   <ul>
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
// </body>
// </html>
// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?
let bodyElem = document.body;
let divElem = bodyElem.children[0];
console.log(divElem);


let bodies=document.body;
let firstKid= bodies.firstElementChild;
console.log(firstKid);


// 2. The ul DOM node?

// let bods = document.body;
// let last = bods.lastElementChild;
// console.log(last);
//this was my origional solution to the problem but because this is linked to the html it actually returns the script src to this file instead of the UL.


let ull = divElem.nextElementSibling;
console.log(ull);

    //i couldn't think of how to acess it a second time with the ways i had so i looked it up online and was recommended to use getElementsByTagName and specify the tag name within parenthesis.

let numTwo = document.getElementsByTagName('ul')[0];
console.log(numTwo);







// 3. The second li (with Pete)? */}

let pete = numTwo.lastElementChild;
console.log(pete);

let text = document.getElementsByTagName('li')[1];
console.log(text);