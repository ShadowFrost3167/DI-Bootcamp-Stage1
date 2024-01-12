// Instructions

    // <div>Users:</div>
    // <ul>
    //     <li>John</li>
    //     <li>Pete</li>
    // </ul>


// Add the code above, to your HTML file


// Using Javascript:

    // Add a “light blue” background color and some padding to the <div>.

    let users= document.getElementsByTagName("div")[0];

    users.style.backgroundColor = "light blue";

    // Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)

    let unorderedList = document.getElementsByTagName("ul")[0];

    let johnny = unorderedList.querySelector("li:first-child");

    if (johnny){
        johnny.style.display ="none";
    }


    // Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)

    let peteBorder = unorderedList.querySelector("ul li:nth-child(2)");

    if (peteBorder){
        peteBorder.style.border = "5px solid yellow";
    }

    // Change the font size of the whole body.

    document.documentElement.style.fontSize = "60px";

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if (users.style.backgroundColor = "light blue"){
    alert("Hello x and y")
}
