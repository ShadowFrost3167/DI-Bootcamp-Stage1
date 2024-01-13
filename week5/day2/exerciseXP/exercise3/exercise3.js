// Declare a global variable named allBoldItems.
var allBoldItems
// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

/* <body> */
    /* <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
        <strong>end</strong> you <strong>will</strong> be great Developers!
        <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p> */
function getBoldItems(){
    let paragraph = document.querySelector("p");

    let BoldItems = paragraph.getElementsByTagName("strong");

    let allBoldItems = Array.from(BoldItems);

    return allBoldItems;
}

getBoldItems();



 // Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(){
    let paragraph = document.querySelector("p");

    let BoldItems = paragraph.querySelectorAll("strong");

    BoldItems.forEach(function(item){
        item.style.color="blue";
    });
       
}
highlight();
// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault(){
    let paragraph = document.querySelector("p");

    let BoldItems = paragraph.querySelectorAll("strong");

    BoldItems.forEach(function(item){
        item.style.color="black";
    });
       
}
returnItemsToDefault();

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example */}
let paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);




