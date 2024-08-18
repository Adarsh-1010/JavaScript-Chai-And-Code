let score="33abc";

console.log(typeof score);

console.log(typeof(score));

let valueInNumber= Number(score);

console.log(typeof valueInNumber);

/*
The type of valueInNumber is "number", even though its value is NaN. This is because NaN is still considered a number in JavaScript.*/

console.log(valueInNumber);

/*
A variable in JavaScript is assigned the value NaN (Not-a-Number) when an operation or conversion that is supposed to result in a numeric value fails due to invalid input or an inappropriate operation. */

let score1=null;

console.log(typeof score1);

console.log(typeof(score1));

let valueInNumber1= Number(score1);

console.log(valueInNumber1);

console.log(typeof valueInNumber1);


let score2=undefined;

console.log(typeof score2);

console.log(typeof(score2));

let valueInNumber2= Number(score2);

console.log(valueInNumber2);

console.log(typeof valueInNumber2);

/*
"33" => 33
"33abc" => NaN
*/

let isLoggedIn="";
let booleanIsLoggedIn=Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

/*
In JavaScript, the Boolean() function converts values to true or false based on "truthy" and "falsy" values.
Falsy values include: false, 0, "" (empty string), null, undefined, and NaN.
Any value that is not falsy is considered truthy.
Outcome: Since isLoggedIn is an empty string (""), which is a falsy value, booleanIsLoggedIn is assigned the value false.*/


let someNumber=33;

let stringNumber= String(someNumber);

console.log(stringNumber);

console.log(typeof stringNumber);



