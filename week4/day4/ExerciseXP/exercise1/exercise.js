// Add the code above, to your HTML file

// Using Javascript:

    // Retrieve the div and console.log it

    console.log(document.getElementsByTagName("div"));
    

    // Change the name “Pete” to “Richard”.
    let Richard = document.querySelectorAll("li");

    Richard.forEach(function(item){
        if (item.textContent === "Pete"){
            item.textContent="Richard";
        }
    });
    
    // Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)

    let Sarah = document.querySelectorAll("li");

    Sarah.forEach(function(item){
        if (item.textContent === "Sarah"){
            item.remove();
        }
    })
    // Change each first name of the two <ul>'s to your name. (Hint : use a loop)

    let myName = document.querySelectorAll(".list li");

        
    myName.forEach(function(item){
        if (item.textContent === "John" || item.textContent=== "David"){
            item.textContent = "Ariel";
        }
    });

    


// Bonus - Using Javascript:
    // Add a class called student_list to both of the <ul>'s.

    let list = document.getElementsByClassName("list");
    

    for (let i =0; i<list.length; i++){
        list[i].classList.add("student_list");
    }

    // Add the classes university and attendance to the first <ul>.
    let List = list[0];
    let classes = document.createElement("li");
    let attendance = document.createElement("li");
    

    classes.textContent="classes";
    attendance.textContent="attendance";

    //didn't seem to work in the console log idk why. will ask daniel when we have a meeting again.
    
//reference on page of the relevant html:

    // <div id="container">Users:</div>
    // <ul class="list">
    //     <li>John</li>
    //     <li>Pete</li>
    // </ul>
    // <ul class="list">
    //     <li>David</li>
    //     <li>Sarah</li>
    //     <li>Dan</li>
    // </ul>

