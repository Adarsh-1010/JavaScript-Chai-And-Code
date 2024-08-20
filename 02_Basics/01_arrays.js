
//Arrays
const arr=[1,2,3,4,5,6,7,8,"Adarsh",true];//can have multiple data types

const arr1=[1,2,3,4,5,6];
console.log(arr1[0]);

const myheroes=["Adarsh","Pathak","Hello"];

const arr2=new Array(1,2,3,4,5);

arr.push(10);
arr.push(11);
arr.pop();
console.log(arr);

arr.unshift(9); //Push elements from starting
console.log(arr);

arr.shift();//Delete first element from starting
console.log(arr);

console.log(arr.includes(10));//true

console.log(arr.indexOf(5));//returns index

const newArr=arr.join();
console.log(arr);
console.log(newArr);//returns a string of elements
console.log(typeof newArr);

console.log("A ",arr);
const myn1=arr.slice(1,4);//Does not effect the original array
console.log(myn1);
console.log("B ",arr);

const myn2=arr.splice(1,4);//Effects the original array
console.log(myn2);
console.log("C ",arr);
