const accountId=1010;

let accountEmail="adarsh@gmail.com";

var accountPassword="12345";

accountCity="Jaipur"; //This is not good practice but a variable can be declared

// accountId=2020;  Const Keyword can't be changed so this is not allowed

accountEmail="hello@gamil.com";

accountPassword="212121";

accountCity="bengaluru";

let accountState;
console.log(accountState);

console.table([accountId,accountEmail,accountPassword,accountCity]);

// QUE: WHY DO WE PREFER LET OVER VAR IN JAVASCRIPT

/*var: Variables declared with var are function-scoped, meaning they are only limited to the function in which they are declared. However, if declared outside of any function, they become globally scoped. This can lead to unexpected behaviors in loops or conditional statements.
let: Variables declared with let are block-scoped, meaning they are limited to the block (e.g., {}) in which they are declared. This makes let safer to use in loops, conditionals, and other block structures because the variable is confined to that specific block.
javascript
Copy code
if (true) {
    var x = 5;
    let y = 10;
}
console.log(x); // 5 (x is function-scoped)
console.log(y); // ReferenceError: y is not defined (y is block-scoped)
2. Hoisting:
var: Variables declared with var are hoisted to the top of their scope, but their initialization is not hoisted. This means you can reference a var variable before it is declared, but it will be undefined until the line of code where it is initialized is executed.
let: Variables declared with let are also hoisted, but they are not initialized and will throw a ReferenceError if you try to access them before the declaration. This behavior is known as the "temporal dead zone."
javascript
Copy code
console.log(a); // undefined (hoisted, but not initialized)
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
3. Re-declaration:
var: Variables declared with var can be re-declared in the same scope, which can lead to accidental overwriting of variables.
let: Variables declared with let cannot be re-declared in the same scope, reducing the risk of accidentally overwriting variables.
javascript
Copy code
var x = 5;
var x = 10; // No error, but can lead to bugs

let y = 15;
let y = 20; // SyntaxError: Identifier 'y' has already been declared */

