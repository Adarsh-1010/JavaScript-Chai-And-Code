
//PRIMITIVE DATA TYPES
// 7 types => String,Number,Boolean,Symbol,BigInt,Null,Undefined

//Reference (Non Primitive Data Types)
//Arrays ,Objects,Functions

//# Is JavaScript a dynamically typed language or statically typed language 

// What Does Dynamically Typed Mean?
// Dynamic Typing: In a dynamically typed language, the type of a variable is determined at runtime, not at compile time. This means you don't have to explicitly declare the type of a variable when you define it, and the same variable can hold values of different types at different times.

// javascript
// Copy code
// let x = 10;       // x is a number
// x = "Hello";      // now x is a string
// x = true;         // now x is a boolean
// Type Flexibility: This flexibility allows for quick and easy code writing, but it also means that type-related errors might only be caught during execution, not while writing the code.

// Statically Typed Language (for Comparison)
// In a statically typed language, the type of a variable is determined at compile time and must be explicitly declared. Once a type is assigned, it cannot change. For example, in languages like Java or C++, if you declare a variable as an integer, you cannot later assign a string to it without causing an error.

const score =100;

const scoreValue=100.3;

const isLoggedIn= false;

const OutsideTemp=null;

let userEmail;

const id= Symbol('123');

const anotherId=Symbol('123');

console.log(id === anotherId);// false

// id and anotherId: Even though both symbols are created with the same description ('123'), they are distinct and unique. This means that id and anotherId are not equal to each other.

const bigNumber=89389489384938n;
console.log(typeof bigNumber);


const arr=["Adarsh" ,"Pathak" ,"Hello"];

let obj={
    name:"Adarsh",
    age:2
}

const myFunction=function fun(){
    console.log("hello world");
}

console.log(typeof arr); //object



