// Instructions

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.

const initi = names.map(names => names.charAt(0));

const alpha = initi.sort();

const newSociety = alpha.join('');

// Hint: a string is an array of letters

// Console.log the name of their secret society. The output should be “ABJKPS”

console.log(newSociety);