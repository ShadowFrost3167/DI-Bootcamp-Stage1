{/* <form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="firstname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lastname"><br><br>
  <input type="submit" value="Submit" id="submit">
</form> 
<ul class="usersAnswer"></ul> */}


//Retrieve the form and console.log it.

let form = document.forms[0];
console.log(form);

//Retrieve the inputs by their id and console.log them.

let firstName = form.querySelector("#fname");
let lastName = form.querySelector("#lname");

console.log(firstName);
console.log(lastName);

//Retrieve the inputs by their name attribute and console.log them.

let inputFirstName = form.querySelector('[name="firstname"]');
let inputLastName = form.querySelector('[name="lastname"]');
console.log(inputFirstName);
console.log(inputLastName);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
let button = document.querySelector("[id='submit']");
let userList = document.querySelector(".usersAnswer");


button.addEventListener("click", function(event){
    event.preventDefault();

    let valueFirst = inputFirstName.value;
    let valueSecond = inputLastName.value;

    if (valueFirst !== ""&& valueSecond!==""){
            let liFirst = document.createElement("li");
            let liSecond = document.createElement("li");

            liFirst.textContent = "First Name:" + valueFirst;

            liSecond.textContent = "Last Name:" + valueSecond;

            userList.appendChild(liFirst);
            userList.appendChild(liSecond);
    }else{
            alert("input a first name and a last name!");
    }

    });
console.log(button);

// get the values of the input tags,

// let valueFirst = inputFirstName.value;
// let valueSecond = inputLastName.value;
// make sure that they are not empty,

// create an li per input value,


// then append them to a the <ul class="usersAnswer"></ul>, below the form.