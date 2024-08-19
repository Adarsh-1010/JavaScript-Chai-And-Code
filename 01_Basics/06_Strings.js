const name="Adarsh";
const repoCount=50;
console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`); //This is better way and known as string interpolation

//Another way of declaring string 

const gameName=new String("Adarsh");

console.log(gameName);
console.log(typeof gameName); //Object

console.log(gameName[0]);

console.log(gameName.length)

console.log(name.toUpperCase());    

console.log(name.charAt(3));

console.log(name.indexOf('r'));

const newStr=name.substring(0,4);

console.log(newStr);

const newString=name.slice(0,4);

console.log(newString);

// slice(-4):

// javascript
// Copy code
// const name = "Adarsh";
// const newString = name.slice(-4);
// console.log(newString); // "arsh"
// Explanation:
// beginIndex = -4 starts the slice from the 4th character from the end, which is "a".
// Since no endIndex is provided, it slices till the end of the string.
// slice(-4, -1):

// javascript
// Copy code
// const name = "Adarsh";
// const newString = name.slice(-4, -1);
// console.log(newString); // "ars"
// Explanation:
// beginIndex = -4 starts the slice at the 4th character from the end, which is "a".
// endIndex = -1 stops before the last character, which is "h".
// The result excludes the last character, so it returns "ars".

const str="     Adarsh       ";
console.log(str.trim());

const url="https://Adarsh.%20.com";
console.log(url.replace('%20','-'));

console.log(url.includes("Adarsh"));

const sentence = "Hello world, welcome to JavaScript!";
const words = sentence.split(" ");
console.log(words);
// ["Hello", "world,", "welcome", "to", "JavaScript!"]

const sentence2 = "Hello world, welcome to JavaScript!";
const limitedWords = sentence2.split(" ", 3);
console.log(limitedWords);
// ["Hello", "world,", "welcome"]

