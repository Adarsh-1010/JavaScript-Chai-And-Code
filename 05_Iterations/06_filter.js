
const name=["Adarsh","Pathak","Shukla","Hello"];

const values=name.forEach((item) => {
    console.log(item);
});
console.log(values);    //Undefined
// Return Value of forEach:

// The forEach method does not return anything. It always returns undefined.
// Its primary purpose is to iterate over the array and execute the callback function on each element, but it doesn't produce a new array or value.
 

// *********Filter*********

// const newArray = array.filter((element, index, array) => {    //Synatx of filter method....
//     return condition; // Must return true or false
// });

const num=[1,2,3,4,5,6,7,8,9,10];

const ans=num.filter((item)=>{   //It returns an array of items
     return item;
})
console.log(ans);

const ans1=num.filter((item)=>(item>5))  //returns an item greater than 5
console.log(ans1);

const array=[1,2,3,4,5,6,7];         //Good Example
 const answer=array.filter((item)=>{
    return 4;
 })
 console.log(answer);


const newNums=[];
num.forEach((item)=>{    //returning an array of items using for each loop 
    if(item>4){
        newNums.push(item);
    }
});
 console.log(newNums);

 const books=[
    {
        title:"One",genre:"Non fiction",publish:1982,edition:1986
    },
    {
        title:"Two",genre:"fiction",publish:1983,edition:1987
    },
    {
        title:"Three",genre:"Non fiction",publish:1984,edition:1988
    },
    {
        title:"Four",genre:"History",publish:1985,edition:1989
    },
    {
        title:"Five",genre:"Science",publish:1986,edition:1990
    },
    {
        title:"Six",genre:"fiction",publish:1987,edition:1991
    },
    {
        title:"Seven",genre:"Non fiction",publish:1988,edition:1992
    },
    {
        title:"Eight",genre:"fiction",publish:1989,edition:1993
    }
 ]

 let myBooks=books.filter((item)=>{  //returns an array of items ....
    return item.genre==="fiction";
 })
 console.log(myBooks);

 let myBooks1=books.filter((item)=>{
    return item.publish>1986;
 })
 console.log(myBooks1);
 

 


