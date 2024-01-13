{/* <article>
    <h1> Some Facts </h1>
    <h2> The Chocolate </h2>
    <h3> History of the chocolate </h3>
    <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
    Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
    <p> After the European discovery of the Americas, chocolate became 
    very popular in the wider world, and its demand exploded. </p>
    <p> Chocolate has since become a popular food product that millions enjoy every day, 
    thanks to its unique, rich, and sweet taste.</p> 
    <p> But what effect does eating chocolate have on our health?</p> 
</article> */}

let factss = document.getElementsByTagName("h1");
console.log(factss);

let removed = document.getElementsByTagName("p")[3];
let article = document.querySelector("article");
article.removeChild(removed);

console.log(article);

let chocolatePressed = document.querySelector("h2");

chocolatePressed.addEventListener("click", function(){
    chocolatePressed.style.backgroundColor = "red";
});

chocolatePressed.addEventListener("click", function(){
    chocolatePressed.style.display = "none";
});

let button = document.createElement("button");
let buttonBoldText = document.createTextNode("click to bold");
button.appendChild(buttonBoldText);
let body = document.querySelector("body");

let parag = document.querySelectorAll("p");
body.appendChild(button);
function embolden(){
    parag.forEach(parag =>{
    parag.style.fontWeight = "bold";
    });
}
    
button.addEventListener("click", embolden);


