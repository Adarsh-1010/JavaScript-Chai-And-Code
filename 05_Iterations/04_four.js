
const obj={
    name:"Adarsh",
    age:22,
    class:"A"
}

for (const key in obj) {    
    console.log(key);        //prints the keys for objects
}

for (const key in obj) {
   console.log(obj[key]);
}

const arr=[100,200,300,400,500];
for (const key in arr) {
    console.log(key);      //prints the keys for array
}

for (const key in arr) {
    console.log(arr[key]);      
}

const map=new Map();   //Map is a object that holds key value pair

map.set("IN","India");
map.set("USA","United States of America");
map.set("Fr","France");

for (const key in map) {    //we cannot traverse map using for in loop
   console.log(key);
}
