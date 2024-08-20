const name=["Adarsh","Pathak","Hello","Good"];
const dc=["superman","batman","flash"];
// name.push(dc);
// console.log(name);
// console.log(name[4][1]);

const all=name.concat(dc);//returns a new array
console.log(all);

const all1=[...name,...dc];//Known as spread operator.It combines the elements of the two array
console.log(all1);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const anotherArray1=anotherArray.flat(Infinity);//Infinity is the total depth of the arrays
console.log(anotherArray1);

console.log(Array.isArray("Adarsh"));
console.log(Array.from("Adarsh"));//Converts into array
console.log(Array.from({name:"Adarsh"}));//It in not convertable into arrays that is why it will return simply empty array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));














