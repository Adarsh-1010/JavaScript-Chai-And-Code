
function fun(){
    console.log("Adarsh");
    console.log("Pathak");
    console.log("Hello");
    console.log("My Name");
    console.log("Good");
}
console.log(typeof fun);//object function
console.log(fun);//Prints reference of the function
fun();//Executes Function
console.log(fun());
// If fun is defined as a valid function, let's assume it looks like this:

// function fun() {
//   return 5;
// }
// Then:

// fun(); will call the function, but since there's no console.log or any other way to see the result, it won't output anything to the console. It will simply execute and return 5, but that return value is not used.

// console.log(fun()); will call the function fun() and print its return value to the console. In this case, it will output 5 to the console.

function add(number1,number2){ //Here number1 and number2 are parameters
    console.log(number1+number2);
}
add();

// Function Definition:

// javascript
// Copy code
// function add(number1, number2) {
//     console.log(number1 + number2);
// }
// Function Call:

// javascript
// Copy code
// add();
// Since no arguments are passed to add(), number1 and number2 will both be undefined.

// Addition Operation:
// Inside the function, console.log(number1 + number2); attempts to add number1 and number2. Since both are undefined, the operation is essentially:

// javascript
// Copy code
// console.log(undefined + undefined);
// Result of undefined + undefined:
// In JavaScript, adding undefined to anything results in NaN (Not-a-Number). Therefore, undefined + undefined results in NaN.

add(2,3);//5   Here 2 and 3 are arguments
add(2,"3");//23
add(3,null)//3

const ans=add(3,4);//Here add(3,4) call and executes the function but in ans variable return type of function is stored basically what is the function returning......


function add1(number1,number2){
    let result=number1+number2;
    return result;
    console.log("Adarsh")//Unreachable code
}
add1();//Only executes the function does not print anything on the console
const result=add1(4,7);
console.log(result);

function loginUserMessage(username="Hello this is default value"){
    if(username==undefined){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`; 
}
loginUserMessage("Adarsh");//only executed
console.log(loginUserMessage("Adarsh"));//executed and prints the value of return 
console.log(loginUserMessage());//undefined just logged in


function calculateCartprice(...num1){ //Rest Operator
    return num1;
}
console.log(calculateCartprice(200,400,500));

// The code you provided uses the rest operator (...) in the function definition. Here's how it works:

// Breakdown of the Code
// javascript
// Copy code
// function calculateCartprice(...num1) { 
//     return num1;
// }

// console.log(calculateCartprice(200, 400, 500));
// Explanation
// Rest Operator (...):

// The ... operator, when used in the function parameter list, is called the rest operator.
// It allows a function to accept an indefinite number of arguments as an array.
// In your code, ...num1 means that all the arguments passed to the calculateCartprice function will be collected into an array called num1.
// Function Definition:

// The function calculateCartprice takes a single parameter ...num1, which will gather all passed arguments into the num1 array.
// The function then simply returns this array.
// Function Call:

// When you call calculateCartprice(200, 400, 500), the arguments 200, 400, and 500 are passed to the function.
// The rest operator collects these values into an array, so num1 will be [200, 400, 500].


function calculateCartprice(val1,val2,...num1){ //Rest Operator
    return num1;
}
console.log(calculateCartprice(200,400,500,1000));//[500,1000]

const user={
    name:"Adarsh",
    age:22
}

function handleObject(anyObject){
 console.log(`Hello my name is ${anyObject.name} and age is ${anyObject.age}`);
}
// handleObject(user);

handleObject({   //Another way of passing object
    name:"Adarsh",
    age:22
})


const arr=[1,2,3,4,5];
function getvalue(newarr){
    return newarr[1];
}

// console.log(getvalue(arr));

console.log(getvalue([100,200,300,400])); //another way of passing array 







