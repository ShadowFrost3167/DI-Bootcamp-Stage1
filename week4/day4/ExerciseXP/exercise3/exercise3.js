// 🌟 Exercise 3 : Change The Navbar
// Instructions

/* <div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div> */


// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let social = document.getElementById("navBar");
social.id="socialNetworkNavigation";

// We are going to add a new <li> to the <ul>.

    // First, create a new <li> tag (use the createElement method).
    // Create a new text node with “Logout” as its specified text.
    // Append the text node to the newly created list node (<li>).
    // Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

        //my breakdown and thought process after reading through the instructed process: 1) make a new li tag with createElement method 2) separately create a new text node with logout as specified text 3) join the text node to the li tag 4) add that li tag to the ul.



let linkz = document.createElement("li");
let nodez = document.createTextNode("Logout");
linkz.appendChild(nodez);

let list = document.getElementsByTagName("ul")[0];

list.appendChild(linkz);


    

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
//i think i can console.log the textContent. 

let oldest = document.querySelector("li:first-child");
if (oldest){console.log(oldest.textContent);}

let youngest = document.querySelector("li:last-child");
if (youngest){console.log(youngest.textContent);}