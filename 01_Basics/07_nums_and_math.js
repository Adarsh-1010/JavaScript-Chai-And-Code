const score=400;
console.log(score);

const balance=new Number(100);
console.log(balance);

console.log(score.toString());// converts into strings

console.log(balance.toFixed(2));// 100.00

const otherNumber=123.8966;
console.log(otherNumber.toPrecision(3));
// In this example, the number 123.8966 has 7 significant digits.
// By specifying 3 as the argument, toPrecision(3) will return the number formatted with only the first three significant digits.

 const hundred=1000000;
 console.log(hundred.toLocaleString());

// ***************MATHS***************

console.log(Math);
console.log(Math.abs(-4));  

console.log(Math.round(4.6));

console.log(Math.ceil(4.2));

console.log(Math.floor(4.2));

console.log(Math.min(3,4,5,6,8));

console.log(Math.max(3,4,5,6,7,8));

console.log(Math.random());
console.log((Math.random()*10))
console.log(Math.floor(Math.random()*10))
