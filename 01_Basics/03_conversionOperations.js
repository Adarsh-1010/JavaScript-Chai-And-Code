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

// ****************OPERATIONS******************

let value=3;
let negValue=-value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%2);

let str1="Adarsh";

let str2=" Pathak";

let str3=str1+str2;

console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"3");

/*Note:
The + operator in JavaScript serves two primary purposes:

String concatenation when one or both operands are strings.
Addition when both operands are numbers.
In this case, because one of the operands ("1") is a string, JavaScript will perform string concatenation rather than numerical addition.*/


console.log(+true);

/*Binary + Operator:

Usage: When the + operator is used between two operands, it is a binary operator.
Operation: It performs addition if both operands are numbers, or string concatenation if at least one operand is a string.
Example:
javascript
Copy code
console.log(2 + 2); // Outputs: 4 (Addition)
Unary + Operator:

Usage: When the + operator is placed before a single operand, it is a unary operator.
Operation: It converts the operand into a number if it is not already a number.
Example:
javascript
Copy code
console.log(+true); // Outputs: 1 (Converts true to 1)
console.log(+"5");  // Outputs: 5 (Converts string "5" to number 5)*/

console.log(+"");

/*Since "" is a falsy value that is why output is zero*/

let num1,num2,num3;
num1=num2=num3=2;

let gameCounter=100;
gameCounter++;
console.log(gameCounter);

/*prefix and Postfix operator to understand*/





