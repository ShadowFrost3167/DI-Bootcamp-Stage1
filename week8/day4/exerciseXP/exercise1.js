// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];



const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//i think it will output ['bread','carrot','potato','chicken', 'apple', 'orange']
// ------2------
const country = "USA";
console.log([...country]);
//[USA] 
// the ... makes the string split up into different elements for the array so each letter becomes an element in the array making [u],[s],[a]
// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

//newArray is an undefined with 3 indexes and copied by the ...