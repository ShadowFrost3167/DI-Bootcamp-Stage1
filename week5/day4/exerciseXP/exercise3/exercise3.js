// Instructions
// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         #target {
//           width: 200px;
//           height: 200px;
//           position: relative;
//           background: yellow;
//         }
//         #box {
//           width: 50px;
//           height: 50px;
//           position: absolute;
//           background-color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="target"></div>
//         <br>
//         <div id="box"></div>
//     </body>
//     </html>


// Copy the code above, to a structured HTML file.

// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations

let box = document.getElementById("box");

let offsetX, offsetY;

box.addEventListener("mousedown",function(place){
    offsetX = place.clientX - box.getBoundingClientRect().left;
    offsetY = place.clientY - box.getBoundingClientRect().top;
    
    document.addEventListener("mousemove", dragbox);
    document.addEventListener("mouseup", releasebox);

    place.preventDefault();
});

function dragbox(place){
    let x = place.clientX - offsetX;
    let y = place.clientY - offsetY;
    box.style.left = x + "px";
    box.style.top = y + "px";
}

function releasebox(){
    document.removeEventListener("mousemove", dragbox);
    document.removeEventListener("mouseup", releasebox);
}



