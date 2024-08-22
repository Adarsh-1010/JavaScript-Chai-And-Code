//Objects can be declared in two ways 
//Literals => singleton nhi banta hai
//constructor =>singleton banta hai 

//Object Literals

const mySym=Symbol("key1");

const user={
    name:"Adarsh",  //Here typeof Name is String
    age:18,    //number
    location:"Prayagraj",//string
    email:"Adarsh@Google.com",//string
    isLoggedIn:false,//boolean
    lastLoginDays:["Monday","Saturday"],//array
    "fullName":"Adarsh Pathak", //string
    [mySym]:"myKey1"
};

console.log(user.name);
console.log(user["age"]);
// console.log(user."fullName")// cannot be accessed through dot(.) beacause double quotes is not allowed with dots
console.log(user["fullName"])//can be accessed through this method

console.log(user[mySym]);//method to access the Symbol


user.email="Adarsh@12345";//changing the value of a particular key in an object

// Object.freeze(user);//Now the value of object cannot be changed
console.log(user);

user.greeting=function fun(){ //added a method to the user 
    console.log("Hello World");
}

console.log(user.greeting); //returns a function
console.log(user.greeting()); // returns the content of the function 
// When you have a function in JavaScript, it can perform actions and return a result. For example:

// javascript
// Copy code
// function add(a, b) {
//     return a + b;
// }
// Here, the function add takes two numbers, adds them, and then uses the return statement to give back the result.

// 2. What Happens If There's No return Statement?
// If a function does not explicitly have a return statement, JavaScript automatically returns undefined. This means the function completes its task but doesn't give back any specific value.

// For example:

// javascript
// Copy code
// function sayHello() {
//     console.log("Hello World");
// }
// This sayHello function prints "Hello World" to the console, but it doesn't return any value. So, if you call:

// javascript
// Copy code
// let result = sayHello();
// The result will be undefined because there's no return statement in the function.

user.greeting2=function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());


