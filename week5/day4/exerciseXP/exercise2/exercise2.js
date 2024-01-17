// Instructions
// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         #container {
//           width: 400px;
//           height: 400px;
//           position: relative;
//           background: yellow;
//         }
//         #animate {
//           width: 50px;
//           height: 50px;
//           position: absolute;
//           background-color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <p><button onclick="myMove()">Click Me</button></p>
//         <div id="container">
//           <div id="animate"></div>
//         </div>
//     </body>
//     </html>


// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
function myMove(){
    let box = document.getElementById("animate");
    let pos = 0;
    let move= setInterval(boxx,1);


    function boxx(){
        if (pos==350){
            clearInterval(move);
        }else{
            pos++;
            box.style.left= pos + 'px';
        }
    }
}

// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.

// Hint : use clearInterval as soon as the box reaches the right end side of the container

// Hint : check out the demonstration in the Course Noted named JS Functions