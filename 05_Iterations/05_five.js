
//For each loop
const coding=["java","c++","python","ruby","js"];

coding.forEach(function fun(item){
    console.log(item);
})
// console.log(fun); 
// Function fun is not defined .....because this is function expression and function fun is having scope within that function block only....

coding.forEach((item)=>{
    console.log(item);
});

function fun(item){
    console.log(item);
}
// Why don't we need to declare item with let, var, or const in function parameters?

// When you define a function and include parameters like function fun(item), you are implicitly declaring those parameters as local variables within the function scope.
// JavaScript automatically treats function parameters as local variables. This is why you don't need to use let, var, or const when defining them.


function printMe(item){
    console.log(item);
}
coding.forEach(printMe);//Here we have given the function reference of printMe function

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);    //prints item indexes along with array
})

const arr=[
    {
        name:"Adarsh",
        age:22
    },
    {
        name:"Pathak",
        age:21
    },
    {
        name:"Shukla",
        age:23
    }
]
 
 arr.forEach((item)=>{
    console.log(item.name);
 })
