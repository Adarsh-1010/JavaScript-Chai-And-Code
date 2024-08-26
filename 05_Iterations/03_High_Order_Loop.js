
//For of Loop:
["","","",""] 

[{},{},{},{}] //Objects inside an array most common

const arr=[1,2,3,4,5];
for (const val of arr) {
    console.log(val);
}

const str="Hello world!";
for (const ch of str) {
    console.log(ch);
}

//Maps:
const map=new Map();   //Map is a object that holds key value pair
console.log(map); // Map empty Object   

map.set("IN","India");
map.set("USA","United States of America");
map.set("Fr","France");

console.log(map);
//Map hold unique values and maintains the order in which order the elements are inserted

for (const key of map) {
    console.log(key);     //returns array of elements
}

for (const [key,value] of map) {      //Destructuring of array is done
    console.log(key + ":" + value);     
}


const obj={
    name:"Adarsh",
    age:22,
    class:"A"
}

for (const [key,val] of obj) {     //Object are not iterable using for of loop
    console.log(key);
}