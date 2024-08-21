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


