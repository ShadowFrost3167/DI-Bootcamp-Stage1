// Exercise 6 : Rudolf
// Instructions

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”


for (let key in details){
    console.log(key +" " +details[key]);
}