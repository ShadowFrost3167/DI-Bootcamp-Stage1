// 🌟 Exercise 1 : HTML Form
// Instructions
// Hint : Read about sending form data using the HTTP protocol

// form

// Create a form like the one above. The form should contain three inputs:

// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

//i did the above in the HTML 

// When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)

var form = document.getElementById("peanutGallery");
form.addEventListener('submit', function(event){
    // event.preventDefault();

    
    var name = document.getElementById("firstName").value;
    console.log(name);

    var comment = document.getElementById("comments").value;
    console.log(comment);

})



// Where will the sent data appear?

//data will be displayed in the URL