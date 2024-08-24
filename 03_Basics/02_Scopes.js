// let a=10;
// const b=20;
// var c=30;

// console.log(a);
// console.log(b);
// console.log(c);

 var c=300; //Global Scope this variable is globally available
if(true){
    let a=10;    
    const b=20;
    var c=30;
}
// console.log(a); //Throws error a is not defined
// console.log(b);//Throws error b is not defined
console.log(c);//If any programmer has declared a variable c=300 but the output he is getting is 30 that is why var is not much preferred over let

let x=300; //This x is globally available anywhere in the below code
if(true){
    let x=30 //This variable is different from variable defined above if statement because it is having different scoping which is called block scoping....
    console.log("In block :",x);
}
console.log(x); //300

// Important Note => Global scoping is different in browser as compared to the node environment 



function one(){
    const username="Adarsh";
    function two(){
        const website="youtube";
        console.log(username); //We are accessing username inside it's scope that is why it will not throw an error....
    }
    two();
    // console.log(website);  //We are accessing website out of scope of website that is why it will throw an error
} 
one();

if(true){
    const username="Adarsh";
    if(username==="Adarsh"){
        const web="Youtube";
        console.log(username+web);    //AdarshYoutube
    }
    //  console.log(web);//error
}

// console.log(username);//error

// **************Interesting Concept**************


console.log(addone(5));
function addone(num){  //This is a function
    return num+1;
}

addTwo(5);
const addTwo=function(num){ //This is a function expression and this is another way of declaring a function
    return num+2;
}
// In the code you've provided, the function is named using a function expression:

// const addTwo = function fun(num) { 
//     return num + 2;
// }
// addTwo(5);
// Explanation:
// Function Expression with a Name:

// const addTwo = function fun(num) { return num + 2; } defines a function using a function expression and gives the function a name (fun). However, the name fun is only available within the function itself.
// The variable addTwo still holds the reference to the function, and you can call it using addTwo(5).
// Calling the Function:

// When you write addTwo(5);, you're invoking the function through the addTwo variable, just as before. The function executes and returns 7.
// Name fun:

// The name fun inside the function expression is primarily used for recursion or debugging. You can't use fun outside the function scope; you must use the variable addTwo to call the function from outside.
// For example, inside the function body, you could call fun(num) to make a recursive call to the same function.


// ***Important Note for Hoisting***

// Function Declarations vs. Function Expressions:
// Function Declaration:

// javascript
// Copy code
// function addTwo(num) { 
//     return num + 2;
// }
// addTwo(5); // This works fine, even if the call is before the declaration
// Hoisting: Function declarations are hoisted, meaning the JavaScript engine moves the entire function definition to the top of the current scope before executing the code. This allows you to call the function before it appears in the code.
// Function Expression:

// javascript
// Copy code
// addTwo(5); // This will throw an error: "Uncaught ReferenceError: Cannot access 'addTwo' before initialization"

// const addTwo = function(num) { 
//     return num + 2;
// }
// No Hoisting for Initialization: In a function expression, the function is assigned to a variable. The variable declaration (const addTwo) is hoisted, but the assignment (function(num) { ... }) is not. This means that while the variable addTwo is known to exist, it remains uninitialized until the line of code that assigns the function is executed.

