// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top:30px;
//             } 

//             label,input {
//                 display:block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html> 

// Write a JavaScript program to calculate the volume of a sphere


let form = document.forms[0];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let radius = parseFloat(form.elements['radius'].value);

    if (!isNaN(radius)) {
        let volume = (4/3) * 3.14 * Math.pow(radius, 3);

        form.elements['volume'].value = volume.toFixed(2);
    } else {
        alert('Please try again.');
    }
});
