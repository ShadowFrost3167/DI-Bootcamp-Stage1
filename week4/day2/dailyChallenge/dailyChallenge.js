// Instructions
// Prompt the user for several words (separated by commas).
let wordsW = prompt("Type, a, few, words, separated, by, commas, like, this");
// Put the words into an array.
let answer = wordsW.split(",");

const lengthOfLongest= getLengthLongest();
// Console.log the words one per line, in a rectangular frame as seen below.



 

rowDisplays();

function rowDisplays(){
    const vertRow = createVertRow();
    console.log(vertRow);

    for (const word of answer){
        displayWord(word);
    }

    console.log(vertRow);
}

function displayWord(word){
console.log("* "+ word.padEnd(lengthOfLongest, " ") + " *");
}






// answer.forEach(indiv);
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words


// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.

function getLengthLongest(){
    let lengthOfLongest = 0;
for (const word of answer){
    const wordLength = word.trim().length;
    if (wordLength > lengthOfLongest){
       lengthOfLongest = wordLength; 
    } 
} return lengthOfLongest;
}

function createVertRow(){
    let numOfStarsTop = lengthOfLongest+4;

    let row = "";
    for (let i =0; i < numOfStarsTop; i++){
        row = row + "*";
    }
    return row;
}

