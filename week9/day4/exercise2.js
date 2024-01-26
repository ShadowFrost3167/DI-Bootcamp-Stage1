
// 🌟 Exercise 2 : HTML Form #2
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab

//SENT DATA APPEARS IN HTML FILES UNDER THE PAYLOAD W/IN THE INSPECTOR UNDER NETWORK




var form = document.getElementById("peanutGallery");
form.addEventListener('submit', function(event){
    
    
    var name = document.getElementById("firstName").value;
    console.log(name);

    var comment = document.getElementById("comments").value;
    console.log(comment);

})


function changeToPost(){
    document.getElementById("peanutGallery").method="POST";
}
changeToPost();

