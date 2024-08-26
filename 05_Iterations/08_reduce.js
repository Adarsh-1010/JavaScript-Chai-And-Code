//Reduce:

// The reduce Method:
// Purpose: The reduce method is used to reduce an array to a single value by applying a function to each element (from left to right) in the array. The function takes two arguments: an accumulator (acc) and the current value (currval).
// Returns: A single value that results from the reduction process.

const nums=[1,2,3,4,5];

const ans=nums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval;
},0);
console.log(ans);

// Given the array nums = [1, 2, 3, 4, 5]:

// First Iteration:

// acc: 1 (First element of the array, since no initial value is provided)
// currval: 2 (Second element of the array)

const ans1=nums.reduce((acc,currval)=>(acc+currval),0); //reduce using arrow function
console.log(ans1);

const user=[
    {
        name:"Adarsh",
        age:20
    },
    {
        name:"Pathak",
        age:21
    },
    {
    name:"rahul",
    age:22
    },
    {
        name:"Mr",
        age:24
    }
]
 const ans2=user.reduce((acc,currval)=>(acc+currval.age),0);
 console.log(ans2);