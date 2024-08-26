//For

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element)
    
}

// console.log(element)//Not accessible due to block scoping 

for (let i = 1; i <=5; i++) {    //Nested Looping
    console.log(`outer loop ${i}`);
     for (let j = 1; j <=5; j++) {
        // console.log(`Inner loop ${j}`);
        console.log(i + '*' + j + ' = '+ i*j);  
     }
}

const array=["adarsh","Pathak","Hello","Goods"];
for (let index = 0; index <=array.length; index++) {     
    const element = array[index];
    console.log(element);
}
// Off-By-One Error: When index equals array.length, the loop still executes, but array[index] refers to an index that is just beyond the last element of the array, which does not exist. Hence, array[index] returns undefined.

for (let i = 1; i <= 10; i++) {  //Use of break statement
    if(i==5)
        break;
    console.log(i);
    
}

for (let i = 1; i <= 10; i++) {  //Use of continue statement
    if(i==5){
        continue;
    }
    console.log(i);
    
}
