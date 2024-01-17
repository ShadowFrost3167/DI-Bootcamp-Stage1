// {/* <html>
// <head>
//     <style>
//     p {
//       background: yellow;
//       color: red;
//     }
//     </style>
// </head>
// <body>
//     <div id="container"></div>
//     <button id="clear">Clear Interval</button>
// </body>
// </html> */}

// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
function Hello(){
    alert("Hello World");
}
setTimeout(Hello, 2000);


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// function paragraphAdd(){
//     let hello = document.getElementById("container");
//     let statement= document.createElement("p");
//     statement.textContent = "Hello World";
//     hello.appendChild(statement);
    
// }
// paragraphAdd();


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

var stop = setInterval(paragraphAdd, 2000);

// The interval will be cleared (ie. clearInterval), when the user will click on the button.
let clear = document.getElementById("clear");

function cease(){
    clearInterval(stop);
}

clear.addEventListener("click", cease);
let statement = document.querySelector("p");

// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

function paragraphAdd(){
    let hello = document.getElementById("container");
    let statement= document.querySelectorAll("#container p");
    


    if (statement.length >= 5){
        cease();

    } else {

        let addition = document.createElement("p");
        addition.textContent = "Hello World";
    hello.appendChild(addition);

    }
    
}
paragraphAdd();
