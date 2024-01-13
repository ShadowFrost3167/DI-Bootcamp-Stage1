{/* <button id="jsstyle">Style</button>  */}

let stile = document.getElementById("jsstyle")
stile.addEventListener("click", mouseClicked);
stile.addEventListener("mousover", mouseOvered);
stile.addEventListener("mouseout", mouseOuted);

function mouseClicked(){
    stile.style.backgroundColor = "red";
    stile.style.color = "white";
}

function mouseOvered(){
    stile.style.backgroundColor = "green";
    stile.style.color = "black";
}

function mouseOuted(){
    stile.style.backgroundColor = "white";
    stile.style.color = "black";
}