// Exercise 2
// let names= ["john", "sarah", 23, "Rudolf",34]

// 1. Write a JavaScript for loop that will go through the variable names.


    // if the item is not a string, pass.

    // if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.


    let names= ["john", "sarah", 23, "Rudolf",34]
    for (let i=0; i < names.length; i++){
        
        if (typeof names[i] !== 'string'){
            continue;}
        else{
            if (names[i].charAt(0) !== names[i].charAt(0).toUpperCase){console.log(names[i].toUpperCase());}
            
        }
        
    }

// 2. Write a JavaScript for loop that will go through the variable names

    // if the item is not a string, go out of the loop.
    // if the item is a string, display it.

    let names2= ["john", "sarah", 23, "Rudolf",34]
    for (let i=0; i <names2.length; i++){
        //i want to use break for this part of the exercise because it is ending the loop by going out of it. 
        if (typeof names2[i] !== 'string'){
            break;
        }
        else{
            console.log(names2[i]);
        }
    }
