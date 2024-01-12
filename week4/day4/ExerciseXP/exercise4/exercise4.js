// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>


// In the js file, create an array called allBooks. 
let allBooks = [];

//This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :

    // title,
    // author,
    // image : a url,
    // alreadyRead : which is a boolean (true or false).


let bookOne ={
    title: "A Series of Unfortunate Events",
    author: "Lemony Snicket",
    image: "https://i.pinimg.com/736x/68/73/7d/68737d3a8429c292150f68e4ea0e4049.jpg",
    alreadyRed: true
} ;

let bookTwo ={
    title: "Enders Game",
    author: "Orson Scott Card",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWy3eIomt0p2-EJSxUHmPc_AWM13WA28gkg&usqp=CAU",
    alreadyRed: true
} ;
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
allBooks.push(bookOne, bookTwo);


// Requirements : All the instructions below need to be coded in the js file:
    // Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
    let table = document.createElement("table");

let headerr = table.insertRow();
for (let key in allBooks[0]){
    let tableHeader = document.createElement("th");
    tableHeader.textContent = key;
    headerr.appendChild(tableHeader);
}

allBooks.forEach(item => {
    let row = table.insertRow();
    for (let key in item){
        let cell = row.insertCell();
        
        //this function is only here for the image sources, without it only the url address is displayed not the actual image.
        if (key === 'image'){
            let img = document.createElement('img');
            img.src = item[key];
            img.style.width = '100px';
            cell.appendChild(img);
        }
        else{
            cell.textContent = item[key];
        }
    

    if (key === 'alreadyRed' && item[key]){
        row.style.color= "red";
    }


        
    }
});




document.body.appendChild(table);



    // For each book :
    // You have to display the book’s title and the book’s author.
    // Example: HarryPotter written by JKRolling.
    // The width of the image has to be set to 100px.
    // If the book is already read. Set the color of the book’s details to red.