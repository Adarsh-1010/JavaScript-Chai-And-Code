//Map Function syntax:

// const newArray = array.map((element, index, array) => {
//     return newValue; // A new value derived from each element
// });

const arr=[1,2,3,4,11,5,6,7,8,9];
const ans=arr.map((item)=>{
    return item+5;
})
console.log(ans);

// *******Chaining*******

const nums=[1,2,3,4,5,6,7,8,9];
const ans1=nums.map((item)=>(item*10)).map((item)=>(item+1)).filter((item)=>(item>40));
console.log(ans1);
