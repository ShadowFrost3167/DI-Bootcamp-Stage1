// Exercise 2


    //<html>
    //<body>
    //<div id="container">Users:</div>
    //  <ul class="list">
    //     <li>John</li>
    //     <li>Pete</li>
    //   </ul>
    //   <ul class="list">
    //     <li>Sarah</li>
    //     <li>Dan</li>
    //   </ul>
    // </body>
    // </html>


// For each of the questions, find 2 WAYS to access :

// 1. The div node

let cont = document.getElementById("container").innerHTML;
console.log(cont);

let tent = document.getElementsByTagName("div")[0].innerHTML;
console.log(tent);

// 2. The ul nodes, and render all of it's children one by one




let ist = document.getElementsByClassName("list");
if (ist.length>0){
    let parent = ist[0];
    console.log(parent);

}




let names = document.getElementsByTagName("li");
let arrayName = Array.from(names);


function classList() { 

for (let i=0; i<arrayName.length; i++){
    console.log(arrayName[i]);
}
}
classList();


// 3. The first li of each ul

